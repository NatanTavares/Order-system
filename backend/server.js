"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', function (request, response) {
    response.send('Order system2');
});
app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});
