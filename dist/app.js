"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var errorHandlerMiddleware_1 = __importDefault(require("./middlewares/errorHandlerMiddleware"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(errorHandlerMiddleware_1["default"]);
app.get("/", function (req, res) {
    res.status(200).send("Servidor rodando");
});
exports["default"] = app;
