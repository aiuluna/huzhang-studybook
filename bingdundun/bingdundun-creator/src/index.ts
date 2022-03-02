#!/usr/bin/env node

import parser from 'yargs-parser'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { ProjectCreator } from './ProjectCreator'
import { ProjectPackager } from './ProjectPackager'

const args = parser(process.argv)

const cmd: string = args._[2]

const help = () => {
	console.log(
		fs.readFileSync(path.resolve(__dirname, '../help.txt'), 'utf-8')
	)
}

if (!cmd) {
	console.log(chalk.red('Command is needed.'))
	help()
	process.exit(-1)
}

async function run() {
	switch (cmd) {
		case 'help':
			help()
			break
		case 'create':
			const creator = new ProjectCreator()
			await creator.create()
			break
		case 'dev':
			const packager = new ProjectPackager()
			packager.watch()
			break
		default:
			help()
			break
	}
}

run().catch((err) => {
	console.log(err)
})
