import ProjectRollupConfig from './ProjectRollupConfig'
import { watch } from 'rollup'

export class ProjectPackager {
	public watch() {
		const config = new ProjectRollupConfig('dev')
		const watcher = watch(config.watchOptions())

		watcher.on('event', (e) => {
			switch (e.code) {
				case 'ERROR':
					console.log(e.error)
					break
				case 'START':
					console.log('start watching')
					break
				case 'BUNDLE_END':
					console.log(e.output)
					break
			}
		})
	}
}
