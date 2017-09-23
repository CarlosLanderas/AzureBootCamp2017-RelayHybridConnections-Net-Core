"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var expressServer_1 = require("./server/expressServer");
var expressApplication = express();
var port = process.env.PORT || 3000;
var expressServer = new expressServer_1.ExpressServer(expressApplication, port);
expressServer.run();
//# sourceMappingURL=main.js.map