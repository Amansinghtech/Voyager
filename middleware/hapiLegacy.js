"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var render_voyager_page_1 = require("./render-voyager-page");
var pkg = require('../package.json');
var hapi = function (server, options, next) {
    if (arguments.length !== 3) {
        throw new Error("Voyager middleware expects exactly 3 arguments, got " + arguments.length);
    }
    var path = options.path, _a = options.route, config = _a === void 0 ? {} : _a, middlewareOptions = __rest(options, ["path", "route"]);
    server.route({
        method: 'GET',
        path: path,
        config: config,
        handler: function (_request, reply) {
            reply(render_voyager_page_1["default"](middlewareOptions)).header('Content-Type', 'text/html');
        }
    });
    return next();
};
hapi.attributes = {
    pkg: pkg,
    multiple: false
};
exports["default"] = hapi;
