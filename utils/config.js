"use strict";
exports.__esModule = true;
exports.PORT = exports.MONGODB_URI = void 0;
var env = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    env.config();
}
var PORT = process.env.PORT;
exports.PORT = PORT;
var MONGODB_URI = process.env.MONGODB_URI;
exports.MONGODB_URI = MONGODB_URI;
if (process.env.NODE_ENV === 'test') {
    exports.MONGODB_URI = MONGODB_URI = process.env.TEST_MONGODB_URI;
}
