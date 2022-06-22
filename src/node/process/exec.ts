import {exec, execSync} from 'child_process'

const result = execSync('ls', {encoding: 'utf-8'})
console.log(result)