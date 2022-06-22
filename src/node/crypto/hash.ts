// 摘要
import { createHash, createCipheriv, createDecipheriv, randomBytes } from 'crypto'
import RSA from 'node-rsa'
import fs from 'fs'
import path from 'path';

const password = [...new Array(1000)].map(_ => '123456').join('-');

// const data = createHash('md5').update(password).digest('hex');
// const data = createHash('sha256').update(password).digest('base64')
// console.log(data)


// 对称加密
const key = randomBytes(32)
const iv = randomBytes(16)
const cipher = createCipheriv('aes-256-gcm', key, iv)
const buffer = cipher.update(password)

const decipher = createDecipheriv('aes-256-gcm', key, iv)
const res = decipher.update(buffer)
console.log(res.toString('utf-8'))

// 非对称加密 rsa
const publicKey = fs.readFileSync(path.resolve(__dirname, 'xxx_rsa.pub'))
const privateKey = fs.readFileSync(path.resolve(__dirname, 'xxx_rsa'))

const bob = new RSA(privateKey)
const alice = new RSA(publicKey)

// console.log(bob.decrypt(alice.encrypt('hi bob')).toString("utf8"))
console.log(bob.encrypt('hi alice').toString("utf8"))