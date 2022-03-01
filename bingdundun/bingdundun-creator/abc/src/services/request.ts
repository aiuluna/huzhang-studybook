import { Toast } from "antd-mobile";
import axios, {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from "axios";
import Cookies from "js-cookie";
import { RequestLoading } from "@/components/RequestLoading";
import queryString from "query-string";
import ENV from "../utils/env";
import bridge from "../utils/jsbridge";
import { baseURL, docBaseUrl } from "./config";

type TConfigExpandByAxiosRequestConfig = AxiosRequestConfig &
  Partial<TCustomAxiosRequestConfig>;
type TResponseExpandByAxiosResponse = AxiosResponse &
  TCustomAxiosResponse & {
    config: AxiosResponse["config"] & Partial<TCustomAxiosRequestConfig>;
  };

type TCustomAxiosRequestConfig = {
  isJson?: boolean; // 是否请求json数据    就不走本地proxy
  isDoc: boolean;
  isWindowLogin?: boolean;
  anonymous: boolean;
  loading: boolean;
  timeout: number;
  loginUrl: string;
};
type TCustomAxiosResponse = {
  code: number;
  message: string;
};
type TResponse<T> = {
  code: number;
  data: T;
  message: string;
};

const isDev = process.env.NODE_ENV === "development";
const isIHos = /^ihospital[a-z0-9]{8,}\.\w+/.test(location.hostname);
const {
  isWeimai,
  isWeiXinMini,
  compare,
  version,
  isWeiXin,
  isAlipay,
  isIOS,
  query,
} = ENV;
const LOGIN_URL = "/account/login.html?isNeedLogin=true";
const IHOS_LOGIN_URL = "/account/h5login.html";

/**
 * 前后端相关约束
 * x-weimai-token     授权访问
 * x-weimai-areano    地区(应用于大数据、日志)
 */

// 交互里拿 token
// 站外 Cookie 获取授权访问信息
const TOKEN_KEY = "x-weimai-token";
let TOKEN_VALUE = "";

const getAliasCode = () => {
  const aliasCode = location.hostname.match(/ihospital\w+/);
  return aliasCode ? aliasCode[0] : "";
};

const getChannelCode = () => {
  const channelCodeReg = (location.host || "").match(/[0-9]{6}/);
  let channelCode =
    channelCodeReg && location.host.indexOf("openweimai.com")
      ? channelCodeReg[0]
      : "";
  channelCode =
    channelCode ||
    query.channelCode ||
    query.channelid ||
    sessionStorage.CHANNELID ||
    localStorage.channelid ||
    "";
  return channelCode;
};

const getChannelPlatform = () => {
  if (isWeiXinMini) {
    return 104;
  } if (isWeiXin) {
    return 103;
  } if (isAlipay) {
    return 105;
  } if (isWeimai) {
    return 101;
  } 
    return 106;
  
};

// 登录失效跳转登录页
export const reLogin = (url?: string) => {
  // 清除用户缓存数据
  Cookies.remove(TOKEN_KEY, { domain: ".myweimai.com" });
  localStorage.removeItem("userInfo");
  const { businessSource, associatedId } = queryString.parse(location.search);
  const sourceParams = `businessSource=${businessSource}&associatedId=${associatedId}`;
  let loginUrl = `${location.origin}${LOGIN_URL}`;
  loginUrl = loginUrl.includes("?") ? `${loginUrl}&${sourceParams}` : `${loginUrl}?${sourceParams}`;
  if (isIHos) {
    localStorage.setItem("x-weimai-loginback", "1");
    loginUrl = `${location.origin}${IHOS_LOGIN_URL}`;
  }
  if (url) {
    loginUrl = `${location.origin}${url}`;
  }
  if (isWeimai) {
    if (compare(version, "5.4.0") >= 0) {
      // 新版 loginwebview原生登陆会根据redirect跳转
      return (location.href = `weimai://wm/loginWebview?mUrl=${encodeURIComponent(
        loginUrl
      )}`);
    }
    return (location.href = `weimai://wm/webview?mUrl=${encodeURIComponent(
      loginUrl
    )}`);
  }
  if (url || isIHos) {
    location.href = `${loginUrl}${
      !url ? `?redirect=${encodeURIComponent(location.href)}` : ""
    }`;
    return;
  }
  location.href = `${loginUrl}&redirect=${encodeURIComponent(location.href)}`;
};

const axiosInst: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

/** http 请求发送拦截器 */
const setHeader = axiosInst.interceptors.request.use(
  async (config: TConfigExpandByAxiosRequestConfig) => {
    if (config.loading) {
      RequestLoading();
    }
    if (isDev && !config.isJson) {
      config.url = `/proxy${(config.isDoc && "-doc") || ""}${config.url}`;
      return config;
    }
    if (config.isDoc) {
      const $bu = config.baseURL;
      if ($bu) {
        config.baseURL = docBaseUrl;
          // (process.env.UMI_ENV === "prod" && "//doctor.myweimai.com") ||
          // $bu.replace(/(test[1-6]?|stable|integration|pre)/, "$1-doc");
      }
    }
    // 设置交互超时时间
    if (isWeimai) {
      // const { token } = await bridge.getAccessToken();
      TOKEN_VALUE = Cookies.get(TOKEN_KEY);
    } else if (isWeiXinMini) {
      TOKEN_VALUE = query.token;
    } else {
      TOKEN_VALUE = Cookies.get(TOKEN_KEY);
    }
    if (TOKEN_VALUE) {
      config.headers[TOKEN_KEY] = TOKEN_VALUE;
    }
    return config;
  },
  (err: Error) => {
    RequestLoading().close();
    Toast.fail(err.message);
  }
);

/** http 请求返回拦截器 */
/** 第一层，登录已失效 */
axiosInst.interceptors.response.use(
  (response: TResponseExpandByAxiosResponse) => {
    const { headers, data, config } = response;
    RequestLoading().close();
    if (config.isWindowLogin) {
      return data;
    }
    const { code, message } = data;
    // 接口返回code不为0提示错误信息
    if (code !== 0) {
      // 登录已过期发送全局消息
      if (code === 40400) {
        if (isWeiXinMini) {
          const redirect = encodeURIComponent(
            `/pages/webview/index?url=${  encodeURIComponent(location.href)}`
          );
          window.wx.miniProgram.redirectTo({
            url: `/pages/login/auth/index?redirect=${redirect}`,
          });
          return;
        }
        reLogin(config.loginUrl);
        return data;
      }
      Toast.fail(message);
    }
    // 代表登录即将过期，重设置
    if (headers[TOKEN_KEY]) {
      TOKEN_VALUE = headers[TOKEN_KEY];
      Cookies.set(TOKEN_KEY, TOKEN_VALUE, {
        expires: 30,
        domain: ".myweimai.com",
      });
      // if (isWeimai && compare(version, "4.8.0") === 1) {
      //   bridge.command("setAccessToken", { token: TOKEN_VALUE });
      // }
    }
    return data;
  },
  (err: Error) => {
    // const { response: { status, statusText, data: { msg = '服务器发生错误' } }} = err
    RequestLoading().close();
    // 限流
    if (/code\s429$/.test(err.message)) {
      Toast.info("哎呀，当前人数过多，请稍后再试～");
      return;
    }
    // 超时文案自定义
    if (/^timeout\sof\s\d+ms\sexceeded$/.test(err.message)) {
      Toast.info("网络不给力，请稍后重试", 2);
      return;
    }

    Toast.fail(err.message);
  }
);

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {AxiosPromise}           An object containing either "data" or "err"
 */

export default function request(
  url: string,
  options: TConfigExpandByAxiosRequestConfig
): AxiosPromise<TResponse<unknown>> {
  // 默认非匿名请求
  if (options.anonymous) {
    axios.interceptors.request.eject(setHeader);
  }
  const channel = {
    channelAlias: getAliasCode(),
    channelSource: getChannelCode(),
    channelPlatform: getChannelPlatform(),
  };
  options.params = options.params || {};
  options.params = {
    ...channel,
    ...options.params,
  };
  return axiosInst({ url, ...options });
}

request.get = (url: string, options: TConfigExpandByAxiosRequestConfig) => request(url, options);

request.post = (url: string, options: TConfigExpandByAxiosRequestConfig) => {
  options.method = "POST";
  if (options.params) {
    options.data = options.params;
    delete options.params;
  }
  return request(url, options);
};

request.upload = (url: string, data:any) => {
  axios({
    method: 'post',
    url: url,
    headers: {
      'Content-type': 'multipart/form-data',
      'Accept': '*',
      'Access-Control-Allow-Origin': '*',
      'AccessToken': ''
    },
    data:data
  }).then((res:any) => {
    console.log("res--->",res);
  })
}