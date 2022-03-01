"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectPackager = void 0;
var ProjectRollupConfig_1 = __importDefault(require("./ProjectRollupConfig"));
var rollup_1 = require("rollup");
var ProjectPackager = /** @class */ (function () {
    function ProjectPackager() {
    }
    ProjectPackager.prototype.watch = function () {
        var config = new ProjectRollupConfig_1.default('dev');
        var watcher = (0, rollup_1.watch)(config.watchOptions());
        watcher.on('event', function (e) {
            switch (e.code) {
                case 'ERROR':
                    console.log(e.error);
                    break;
                case 'START':
                    console.log('start watching');
                    break;
                case 'BUNDLE_END':
                    console.log(e.output);
                    break;
            }
        });
    };
    return ProjectPackager;
}());
exports.ProjectPackager = ProjectPackager;
