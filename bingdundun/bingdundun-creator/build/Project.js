"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var Project = /** @class */ (function () {
    function Project(type, name) {
        this.type = type;
        this.name = name;
        this.cwd = path_1.default.resolve(__dirname, name);
    }
    Project.prototype.getName = function () {
        return this.name;
    };
    Project.prototype.getType = function () {
        return this.type;
    };
    return Project;
}());
exports.default = Project;
