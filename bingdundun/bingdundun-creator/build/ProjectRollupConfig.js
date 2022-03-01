"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_1 = require("./resolver");
var rollup_plugin_postcss_1 = __importDefault(require("rollup-plugin-postcss"));
var plugin_typescript_1 = __importDefault(require("@rollup/plugin-typescript"));
var plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
var plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
var plugin_replace_1 = __importDefault(require("@rollup/plugin-replace"));
// @ts-ignore
var rollup_plugin_url_1 = __importDefault(require("rollup-plugin-url"));
var ProjectRollupConfig = /** @class */ (function () {
    function ProjectRollupConfig(usage) {
        this.usage = usage;
    }
    ProjectRollupConfig.prototype.inputOptions = function () {
        return {
            input: (0, resolver_1.projPathResolve)("src/main.tsx"),
            plugins: this.plugins()
        };
    };
    ProjectRollupConfig.prototype.plugins = function () {
        var isProd = process.env.NODE_ENV === 'production';
        var plugins = [
            (0, plugin_replace_1.default)({
                preventAssignment: true,
                "process.env.NODE_ENV": JSON.stringify(isProd ? 'production' : 'development')
            }),
            (0, rollup_plugin_url_1.default)({
                limit: 8 * 1024,
                include: ["**/*.svg"],
                emitFiles: true,
            }),
            (0, plugin_node_resolve_1.default)(),
            (0, plugin_commonjs_1.default)({
                include: "node_modules/**"
            }),
            (0, rollup_plugin_postcss_1.default)({
                plugins: []
            }),
            (0, plugin_typescript_1.default)({
                tsconfig: (0, resolver_1.projPathResolve)("tsconfig.json")
            })
        ];
        return plugins;
    };
    ProjectRollupConfig.prototype.outputOptions = function () {
        return {
            file: (0, resolver_1.projPathResolve)('build/bundle.js'),
            format: 'cjs',
            sourcemap: process.env.node_env !== 'production'
        };
    };
    ProjectRollupConfig.prototype.watchOptions = function () {
        return __assign(__assign({}, this.inputOptions()), { output: this.outputOptions(), watch: {
                include: (0, resolver_1.projPathResolve)("src/**")
            } });
    };
    return ProjectRollupConfig;
}());
exports.default = ProjectRollupConfig;
