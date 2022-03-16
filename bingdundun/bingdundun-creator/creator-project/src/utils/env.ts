import { browser, os, thirdapp, Version, params } from 'amfe-env';

interface IENV {
  isPalmar: boolean;
  isENZE: boolean;
  isHealthXuzhou: boolean;
  isWeimai: boolean;
  isWeimaiDoctor: boolean;
  isWeimaiPatient: boolean;
  isAlipay: boolean;
  isWeiXin: boolean;
  isWeiXinMini: boolean;
  isWeiBo: boolean;
  isIOS: boolean;
  isIPad: boolean;
  isAndroid: boolean;
  isAndroidPad: boolean;
  isUC: boolean;
  isQQ: boolean;
  isIE: boolean;
  isIEMobile: boolean;
  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isWebview: boolean;
  osName: string;
  osVersion: string;
  browserName: string;
  browserVersion: string;
  version: string;
  query: any;
  compare: (v1: string | Version, v2: string | Version) => number;
  vCompare: (compareString: string) => boolean;
}

const UA: string = window.navigator.userAgent;
const regVersion: RegExp = /(WMDoctor|WMAPP|Micropulse|MicroMessenger|enzeapppatient)\/\d+(\.\d+)*/;
const matchUA: (reg: RegExp) => boolean = reg => !!UA.match(reg);
const toBool: (target: string | boolean | number | undefined | null) => boolean = target =>
  !!target;
let version: string = '';
const matchArr: string[] = UA.match(regVersion);
if (matchArr) {
  version = matchArr[0].split('/')[1];
}

/**
 *
 * 版本比较
 * @param {string} version
 * @param {string} compareString
 * @how to use vCompare(">=4.7.0"); vCompare("<=4.7.0"); vCompare("<4.7.0")
 * @returns true or false
 */
const vCompare = (version: string, compareString: string) => {
  if (!version) {
    return false;
  }
  const [opera, versionStr] = compareString.match(/[<>=]+|[\d\.]+/g);
  const old: any = versionStr.split('.');
  const cur: any = version.split('.');

  if (old.length === 3 && cur.length === 3) {
    const oValue = old[0] * 10000 + old[1] * 100 + old[2] * 1;
    const cValue = cur[0] * 10000 + cur[1] * 100 + cur[2] * 1;
    // tslint:disable-next-line: function-constructor
    return new Function(`return ${cValue}${opera}${oValue}`)();
  }

  return false;
};

const ENV: IENV = {
  isPalmar: matchUA(/Palmar/),
  isENZE: matchUA(/enzeapppatient/),
  isHealthXuzhou: matchUA(/health-xuzhou/),
  isWeimai: matchUA(/(WMAPP|Micropulse|WMDoctor)/i),
  isWeimaiDoctor: matchUA(/(WMDoctor)/i),
  isWeimaiPatient: matchUA(/(WMAPP|Micropulse)/i),
  isAlipay: toBool(thirdapp.isAlipay) || matchUA(/AlipayClient/i),
  isWeiXin: toBool(thirdapp.isWeixin) || matchUA(/MicroMessenger/i),
  isWeiXinMini: !!(navigator.userAgent.toLowerCase().indexOf('miniprogram') > -1),
  isWeiBo: toBool(thirdapp.isWeiBo) || matchUA(/__weibo__/),
  isIOS: toBool(os.isIOS) || matchUA(/iphone os/),
  isIPad: toBool(os.isIPad) || matchUA(/ipad/),
  isAndroid: toBool(os.isAndroid) || matchUA(/android/),
  isAndroidPad: toBool(os.isAndroidPad),
  isUC: toBool(browser.isUC) || matchUA(/ucbrowser/),
  isQQ: toBool(browser.isQQ),
  isIE: toBool(browser.isIE),
  isIEMobile: toBool(browser.isIEMobile),
  isChrome: toBool(browser.isChrome) || matchUA(/chrome\/([\d.]+)/),
  isFirefox: toBool(browser.isFirefox),
  isSafari: toBool(browser.isSafari) || matchUA(/version\/([\d.]+).*safari/),
  isWebview: toBool(browser.isWebview),
  osName: os.name,
  osVersion: os.version.val,
  browserName: browser.name,
  browserVersion: browser.version.val,
  query: params,
  version,
  // v1>v2 => 1; v1<v2 => -1; v1===v2 => 0;
  compare: Version.compare,
  vCompare: compareString => vCompare(version, compareString),
};

export default ENV;
