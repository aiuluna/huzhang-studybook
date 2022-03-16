import axios from 'axios'
const GITLAB_PRE = 'http://git.ichoice.cc'

axios.interceptors.response.use((res) => {
	return res.data
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
	// return axios.get('https://api.github.com/orgs/bingdundun-templates/repos')
    return [{
        name: 'react-ts',
        id: '2152',
        path: 'platform-base/react-ts-template'
    }]
}

/**
 * 获取版本信息
 * @param {string} id 项目id
 * @returns Promise
 */
async function getTagList(id) {
	return axios.get(`${GITLAB_PRE}/api/v3/projects/${id}/repository/tags`)
}


export {
	getRepoList,
	getTagList,
}

// /api/v3/projects?per_page={per_page}&private_token={private_token}