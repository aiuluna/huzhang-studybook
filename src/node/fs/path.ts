import {resolve} from 'path';

console.log(process.argv)

// 工作路径
console.log('cwd' , process.cwd())

console.log(resolve('package.json'))

// 当前文件所在路径
console.log(__dirname)

