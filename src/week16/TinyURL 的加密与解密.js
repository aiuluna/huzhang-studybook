/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 const map = new Map();

 var encode = function (longUrl) {
     const hash = trans10to63(strto10(longUrl));
     const shortUrl = ('http://tinyurl.com/' + hash);
     map.set(shortUrl, longUrl)
     console.log(shortUrl)
     return shortUrl;
 };
 
 /**
  * Decodes a shortened URL to its original URL.
  *
  * @param {string} shortUrl
  * @return {string}
  */
 var decode = function (shortUrl) {
     return map.get(shortUrl)
 };
 
 /**
  * Your functions will be called as such:
  * decode(encode(url));
  */
 
 var strto10 = function (str) {
     let hash = 0;
     const mod = 10e9;
     for (let x of str) {
         hash *= 10;
         hash = (hash + x.charCodeAt('')) % mod;
     }
     return hash;
 }
 
 var trans10to63 = function (num) {
     const code = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const mod = code.length;
     let hash = '';
     while (num) {
         // 低位
         hash += code[num % mod];
         // 高位
         num = Math.floor(num / mod);
     }
     return hash;
 }