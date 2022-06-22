import cluster from 'cluster';
import { cpus } from 'os';
import http from 'http';

// 主进程
if (cluster.isPrimary) {
    for (let i = 0; i < cpus().length; i++) {
        cluster.fork()
    }
} else {
    console.log('start worker: ' + process.pid);
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello\n current PID:' + process.pid)
    }).listen(3000)
}