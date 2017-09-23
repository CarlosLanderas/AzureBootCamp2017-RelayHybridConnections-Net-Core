"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var settings_1 = require("../../settings");
var RelaySocket = require("hyco-ws");
var relayRouter = express.Router();
var relayToken = encodeURIComponent(RelaySocket.createRelayToken('http://' + settings_1.AppSettings.NAMESPACE, settings_1.AppSettings.KEYRULE, settings_1.AppSettings.KEY));
relayRouter.get('/', function (request, response) {
    response.render('index.html', { relayToken: relayToken });
});
exports.default = relayRouter;
//# sourceMappingURL=relayRouter.js.map