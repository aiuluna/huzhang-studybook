import path from 'path';

export default class Project {
    private cwd: string;

    constructor(private type: string, private name: string) {        
        this.cwd = path.resolve(__dirname, name);
    }

    getName() {
        return this.name
    }

    getType() {
        return this.type
    }
    
}