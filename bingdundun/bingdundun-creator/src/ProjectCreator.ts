import fs from 'fs'
import path from 'path'
import util from 'util'

import inquirer from 'inquirer'
import chalk from 'chalk'
import ora from 'ora'

import downloadGitRepo from 'download-git-repo'
import Project from './Project'
import { getRepoList, getTagList } from './utils/http'
import warpLoading from './utils/wrapLoading'

const LOCAL_TEMPLATE_DIR = '.bingdundun-cli-temp'

export class ProjectCreator {
	public async create() {
		const { repo, id, path } = await this.getRepo()
		const tag = await this.getTag(id)
		console.log(chalk.green(`用户选择 => ${repo}的 => ${tag}分支模板`))

		const result = await inquirer.prompt([
			{
				type: 'input',
				name: 'name',
				message: '输入项目名称',
				default: 'creator-project',
			},
		])

		await this.downloadGitRepoFunc(path, tag)

		const project = new Project(repo, result.name)
		await this.createProjectFromTemplate(project)
	}

	async getRepo() {
		const repoLists = await warpLoading(
			getRepoList,
			'waiting fetch templates'
		)

		if (!repoLists) {
			console.log(chalk.red('no templates'))
			return
		}
		const templateLists = repoLists.map((item) => item.name)
		const result = await inquirer.prompt([
			{
				type: 'list',
				choices: templateLists,
				name: 'type',
				message: '选择模板类型',
			},
		])
		const selected = repoLists.filter((item) => item.name === result.type)
		return {
			repo: result.type,
			id: selected[0].id,
			path: selected[0].path,
		}
	}

	async getTag(id: string) {
		const tagLists = await warpLoading(getTagList, 'waiting fetch tags', id)
		if (!tagLists) {
			console.log(chalk.red('no tags'))
			return
		}
		const tags = tagLists.map((item) => item.name)
		const result = await inquirer.prompt([
			{
				type: 'list',
				choices: tags,
				name: 'tag',
				message: '选择模板分支',
			},
		])
		return result.tag
	}

	async createProjectFromTemplate(project: Project) {
		const templateDir = path.resolve(__dirname, '../', LOCAL_TEMPLATE_DIR)
		const localDir = path.resolve(process.cwd(), project.getName())
		if (!fs.existsSync(templateDir)) {
			this.rmRepoTempDir()
			throw new Error(`Type project ${project.getType()} does not exist`)
		}

		if (fs.existsSync(localDir)) {
			const result = await inquirer.prompt([
				{
					type: 'list',
					choices: ['No', 'Yes'],
					name: 'cover',
					message:
						'当前目录已存在同名文件夹' +
						project.getName() +
						'，是否覆盖？',
				},
			])
			if (result.cover === 'Yes') {
				fs.rmSync(localDir, { recursive: true, force: true })
			} else {
				console.log(chalk.red('用户取消创建文件'))
				this.rmRepoTempDir()
				return
			}
		}
		this.recursiveCopy(templateDir, path.resolve(project.getName()), {
			PROJECT_NAME: project.getName(),
		})
		this.rmRepoTempDir()
	}

	private recursiveCopy(
		from: string,
		to: string,
		envs: Record<string, string>
	) {
		if (!fs.existsSync(to)) {
			fs.mkdirSync(to)
		}

		const files = fs.readdirSync(from)

		files.forEach((file) => {
			const fullNameFrom = path.resolve(from, file)
			const fullNameTo = path.resolve(to, file)

			if (fs.statSync(fullNameFrom).isDirectory()) {
				this.recursiveCopy(fullNameFrom, fullNameTo, envs)
				return
			}
			const spinner = ora(`Loading ${chalk.red(file)}`).start()

			if (fullNameFrom.match(/.(json|jsx?|tsx?|yml|yaml)/)) {
				const content = fs
					.readFileSync(fullNameFrom, 'utf-8')
					.replace(/\{\{.*\}\}/, (x) => {
						x = x.replace(/(\{\{|\}\})/g, '').trim()
						return envs[x]
					})
				fs.writeFileSync(fullNameTo, content, 'utf-8')
			} else {
				fs.copyFileSync(fullNameFrom, fullNameTo)
			}
			spinner.succeed()
		})
	}

	private async downloadGitRepoFunc(repoName: string, tag: string) {
		const localTempDir = path.resolve(process.cwd(), LOCAL_TEMPLATE_DIR)
		this.rmRepoTempDir()
		fs.mkdirSync(localTempDir)
        // gitee.com:yourname/repo#brach
		const requestUrl = `direct:http://git.ichoice.cc/platform-base/react-ts-template#tag:0.0.1`
		downloadGitRepo(requestUrl, localTempDir, {clone: true}, (err) => {
            console.log(err)
			console.log(err ? 'Error' : 'Success')
		})
        // http://git.ichoice.cc/platform-base/react-ts-template
		// try {
		// 	await warpLoading(
		// 		util.promisify(downloadGitRepo),
		// 		'download git repo...',
		// 		requestUrl,
		// 		localTempDir,
		//         {clone: true}
		// 	)
		// } catch (error) {
		//     console.log('err=>' + error)
		// 	fs.rmSync(localTempDir, { recursive: true, force: true })
		// }
	}

	private rmRepoTempDir() {
		const localTempDir = path.resolve(process.cwd(), LOCAL_TEMPLATE_DIR)
		if (fs.existsSync(localTempDir)) {
			fs.rmSync(localTempDir, { recursive: true, force: true })
		}
	}
}
