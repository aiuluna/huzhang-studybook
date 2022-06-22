console.log('child process start')

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const run = async () => {
    while(true) {
        await sleep(1000);
        console.log('child process')
    }
}
run()