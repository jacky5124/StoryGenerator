/**
 * Created by Jackist on 10/2/16.
 */
module.exports = function (app) {
    var model = require("./model/model.server.js")();
    var service = require("./service/server.service.js")(app, model);
};