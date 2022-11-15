import axios from 'axios'
import fs from 'fs'
import { pipeline } from 'stream'
import child_process from 'child_process'

const [, , videoUrl, targetDir, targetName] = process.argv
// const mockResponse = `#EXTM3U
// #EXT-X-VERSION:3
// #EXT-X-TARGETDURATION:10
// #EXT-X-MEDIA-SEQUENCE:0
// #EXTINF:10.000000,
// ecd20ba8664e5f78ff6d631e1b08a569-1.ts
// #EXTINF:10.000000,
// a180091a9eb3689293112c40fdc24f90-2.ts
// #EXTINF:10.000000,
// 9f3e2e281b447c2725d3027d6326f062-3.ts
// #EXTINF:10.000000,
// 9ae41289745bfe239f883779ad55db6f-4.ts
// #EXTINF:10.000000,
// bd57f1d35a996ad7edb44521e4776264-5.ts
// #EXTINF:10.000000,
// a235dd944e51d81b516e841be9a511e3-6.ts
// #EXTINF:10.000000,
// aece65d2dff62abdf0ad82a215632a95-7.ts
// #EXTINF:10.000000,
// e819da6d96ebe9524aaa9d61241b4ea7-8.ts
// #EXTINF:10.000000,
// 2dbb21aa6e100980677601f88da9c6ae-9.ts
// #EXT-X-ENDLIST`

const videoUrlArr = []
const streamList = []
const prefixUrl = videoUrl.split('/').slice(0, -1).join('/')

if (!videoUrl.includes('m3u8')) {
    console.log('请输入m3u8文件地址')
    process.exit(1)
}

fs.existsSync(targetDir) || fs.mkdirSync(targetDir, { recursive: true })

// 调用m3u8链接获取视频文件碎片地址
const fetchTSList = async () => {
	const res = await axios({
		method: 'get',
		url: videoUrl,
		responseType: 'arraybuffer',
	})
	const data = res.data.toString('utf8')
	data.split('\n').reduce((prev, current) => {
		if (current.toLocaleLowerCase().indexOf('.ts') > -1) prev.push(current)
		return prev
	}, videoUrlArr)
}

// 根据视频地址列表下载单独视频
const downLoad = async () => {
	await Promise.all(
		videoUrlArr.map(async (item, index) => {
			return axios({
				method: 'get',
				url: prefixUrl + '/' + item,
				responseType: 'stream',
			})
		})
	).then((res) => {
		res.forEach((item, index) => {
			streamList.push(item.data)
		})
	})
}

const streamMerge = async () => {
	const ws = fs.createWriteStream(`${targetDir}/${targetName}`)
	streamMergeRecursive(streamList, ws)
}

const streamMergeRecursive = function (streams, fileWriteStream) {
	if (streams.length === 0) {
		return fileWriteStream.on('end', () => {
			console.log('merge end')
		})
	}
	const [currentReadStream, ...rest] = streams
	currentReadStream.pipe(fileWriteStream, { end: false })
	currentReadStream.on('end', () => {
		streamMergeRecursive(rest, fileWriteStream)
	})
	currentReadStream.on('error', (err) => {
		console.log(err)
		fileWriteStream.close()
	})
}

;(async () => {
	await fetchTSList()
	await downLoad()
	await streamMerge()
})()
