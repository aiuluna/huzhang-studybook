declare var window: Window & { ga: any; WebViewJavascriptBridge: any; fundebug: any };
import isPlainObject from 'lodash/isPlainObject';
import ENV from './env';
const { isWeimai, version, compare } = ENV;
class PatientJsbridge {
  private readyPromise: Promise<any>;

  constructor() {
    if (isWeimai && version && compare(version, '4.7.0') > 0) {
      this.readyPromise = this.ready();
    }
  }

  // 处理返回数据
  public async exec(name, params): Promise<any> {
    if (!isWeimai) {
      return console.error('请使用 WeiMai App 容器打开页面');
    }

    await this.readyPromise;

    // 计时开始
    const before = performance.now();
    const command = isPlainObject(params) ? params.command : '';
    // Object.prototype.toString.call(params) === '[object Object]' ? params.command : '';
    const directive = [name, command].join(':');

    return new Promise(resolve => {
      window.WebViewJavascriptBridge.callHandler(
        name,
        params,
        response => {
          this.gasend(directive, performance.now() - before);
          if (typeof response === 'string') {
            response = JSON.parse(response);
          }

          if (response.code !== 0) {
            Promise.reject(`调用 WeiMai App jsbridge: ${directive} 命令错误`);
            return;
          }

          resolve(response.data || {});
        },
        fail => {
          Promise.reject(`调用 WeiMai App jsbridge: ${directive} 命令错误`);
        }
      );
    });
  }

  /**
   * comand交互
   * @params { command: string, value: object }
   */
  public async command(command, params?) {
    const data = await this.exec('command', { command, values: params ?? {} });
    return data;
  }

  /**
   * 注册交互
   *  command 名称
   *  callBack 回调
   */
  public async registerHandler(command: string, callBack: (res: any) => any) {
    await this.readyPromise;
    return window.WebViewJavascriptBridge.registerHandler(command, callBack);
  }

  /**
   * 搜索交互
   * tab ( 不传 默认all 综合，doctor 医生，hospital 医院，qa 问答，news 资讯，mall 商城)
   */
  public async search(params?) {
    const data = await this.exec('search', params);
    return data;
  }

  /**
   * 获取授权token
   */
  public async getAccessToken() {
    const data = await this.command('getAccessToken');
    return data;
  }

  public async getNetworkStatus() {
    const res = await this.exec('checkNetworkStatus', {});
    try {
      const { data = {} } = res || {};
      return data.status;
    } catch (error) {
      //
    }
  }
  /**
   * 获取UserInfo信息
   */
  public async getUserInfo() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    if (userInfo && userInfo.KEHUBH) {
      return userInfo;
    } else {
      const res = await this.command('getUserInfo');
      if (res && res.KEHUBH) {
        sessionStorage.setItem('userInfo', JSON.stringify(res));
      }
      return res;
    }
  }
  /**
   * 设置客户端头部右上角按钮
   */
  public async h5RightTitle(params) {
    if (params.shareSuccess === 1) {
      this.registerHandler('shareSuccess', () => {
        if (params.typeData.success) {
          params.typeData.success();
        }
      });
    }
    if (params.clickSuccess === 1) {
      this.registerHandler('clickSuccess', () => {
        if (params.typeData.click) {
          params.typeData.click();
        }
      });
    }
    if (params.clickShare === 1) {
      this.registerHandler('clickShare', () => {
        if (params.typeData.clickShare) {
          params.typeData.clickShare();
        }
      });
    }
    const data = await this.command('h5RightTitle', params);
    return data;
  }
  /**
   * 获取网络信息
   */
  public async getNetWork(callBack: (res: any) => void) {
    if (compare(version, '5.23.0') >= 0) {
      const data = await this.exec('checkNetworkStatus', {});
      this.registerHandler('networkDidChange', res => {
        callBack(res);
      });
      return data;
    }
  }
  /**
   * 获取授权AreaNo 地区编号
   */
  public async getAreaNo() {
    const data = await this.command('getAreaNo');
    return data;
  }

  private ready() {
    return new Promise(resolve => {
      // 设置超时阀值
      const timer = setTimeout(() => {
        Promise.reject('JSBridge注入失败');
      }, 5e3);
      // 计时开始
      const before = performance.now();
      // WebViewJavascriptBridge 初始化任务
      const init = () => {
        clearTimeout(timer);
        if (window.WebViewJavascriptBridge.init && !window.WebViewJavascriptBridge.inited) {
          window.WebViewJavascriptBridge.init();
        }
        resolve('');
        // 统计初始化超过1s，并发送Google日志
        this.gasend('init', performance.now() - before);
      };

      if (window.WebViewJavascriptBridge) {
        init();
      } else {
        document.addEventListener('WebViewJavascriptBridgeReady', init, false);
      }
    });
  }

  private gasend(timingVar, timingValue) {
    if (window.ga && timingValue > 1e3) {
      window.ga('send', 'timing', {
        timingCategory: 'jsbridge',
        timingVar,
        timingValue,
      });
    }
  }
}
export default new PatientJsbridge();
