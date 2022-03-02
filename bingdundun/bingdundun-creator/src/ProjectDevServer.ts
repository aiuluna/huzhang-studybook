import express, {Express} from 'express'
import { projPathResolve } from './resolver';

export class ProjectDevServer {

    private app: Express;

    constructor(private port: number) {
        this.app = express()
    }

    public start() {
        this.app.get('/', (req, res) => {
            res.sendFile(projPathResolve("index.html"))
        })
    }

}