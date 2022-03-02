"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projPathResolve = void 0;
var path_1 = __importDefault(require("path"));
var projPathResolve = function (relativePath) {
    return path_1.default.resolve(process.cwd(), relativePath);
};
exports.projPathResolve = projPathResolve;
