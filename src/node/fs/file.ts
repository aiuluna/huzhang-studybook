import path from 'path';
import fs from 'fs';
import { readFile } from 'fs/promises'

// const content = fs.readFileSync(path.resolve(__dirname,'path.ts'), 'utf-8')
// async function run() {
//     const content = await readFile(path.resolve(__dirname, 'path.ts'), 'utf-8')
//     console.log(content)
// }
// run()

// fs.writeFileSync(path.resolve(__dirname, 'a.log'), "aaaaaa.log")

// for (let i = 0; i < 100000; i++) {
//     fs.appendFileSync(path.resolve(__dirname, 'a.log'), "hello word", "utf8")
// }

const inputStream = fs.createReadStream(path.resolve(__dirname, 'a.log'), "utf8")
// inputStream.on('readable', () => {
//     let data;
//     while(data = inputStream.read()) {
//         console.log("read:", data)
//     }
// })


// 写入流
// const fout = fs.createWriteStream(path.resolve(__dirname, 'b.log'), "utf8");
// fout.write('1\n')
// fout.write('2\n')
// fout.write('3\n')
// fout.pipe(fin)  