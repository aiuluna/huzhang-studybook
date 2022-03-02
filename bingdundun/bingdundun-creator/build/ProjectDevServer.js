"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDevServer = void 0;
var express_1 = __importDefault(require("express"));
var resolver_1 = require("./resolver");
var ProjectDevServer = /** @class */ (function () {
    function ProjectDevServer(port) {
        this.port = port;
        this.app = (0, express_1.default)();
    }
    ProjectDevServer.prototype.start = function () {
        this.app.get('/', function (req, res) {
            res.sendFile((0, resolver_1.projPathResolve)("index.html"));
        });
    };
    return ProjectDevServer;
}());
exports.ProjectDevServer = ProjectDevServer;
