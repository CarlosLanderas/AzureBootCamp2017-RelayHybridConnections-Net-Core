"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var appRoutes_1 = require("./routes/appRoutes");
var mustache = require("mustache-express");
var settings_1 = require("../settings");
var ExpressServer = /** @class */ (function () {
    function ExpressServer(app, port) {
        this.app = app;
        this.port = port;
        this.configureRoutes(app);
        this.configureEngineTemplate(app);
        this.configureStaticFiles(app);
    }
    ExpressServer.prototype.configureRoutes = function (app) {
        app.use(appRoutes_1.routes);
    };
    ExpressServer.prototype.configureEngineTemplate = function (app) {
        app.engine('html', mustache());
        app.set('views', settings_1.AppSettings.VIEWSFOLDER);
        app.set('view engine', 'mustache');
    };
    ExpressServer.prototype.configureStaticFiles = function (app) {
        app.use(express.static(settings_1.AppSettings.STATICFOLDERS));
    };
    ExpressServer.prototype.run = function () {
        console.log("Starting app on port " + this.port);
        this.app.listen(this.port);
    };
    return ExpressServer;
}());
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=expressServer.js.map