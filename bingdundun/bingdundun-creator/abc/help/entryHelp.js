const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const minimist = require('minimist');
let package = require('./../package.json');

const { timestamp } = minimist(process.argv.slice(2));

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
const isProd = process.env.NODE_ENV === "production";

const defaults = {
    title: '',
    filename: '',
    template: '',
    chunks: '',
    templateParameters: {}
}
// 构建入口
exports.buildEntry = function (entrys) {
    let entry = {};

    entrys.list.forEach(item => {
        if(!item.entry) return;

        entry[`${timestamp}/${item.entry}`] = item.entryPath;
    })
    
    return entry;
}

// 构建生成 HTML 模板的入口
exports.buildTemplateEntry = function (entrys) {
    let arr = [],
        parameters = entrys.globalParameters;
        
    entrys.list.forEach(item => {
        let opt = Object.assign({}, defaults);
        opt.title = item.title;
        opt.filename = `${ item.filename || item.entry }.html`;
        opt.template = item.template;

        opt.templateParameters = item.templateParameters ? 
                Object.assign({}, parameters, item.templateParameters) :
                Object.assign({}, parameters);

        opt.chunks = item.entry ? [`${timestamp}/${item.entry}`] : [];
        opt.inject = true;
        arr.push(new HtmlWebpackPlugin(opt));
    })

    return arr;
}