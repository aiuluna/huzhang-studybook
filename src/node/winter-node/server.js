import cluster from 'node:cluster';
import { cpus } from 'node:os';

const len = cpus().length;
if (cluster.isPrimary) {
    for (let i = 0; i < len; i++) { 
        cluster.fork()
    }
}
console.log('123')
