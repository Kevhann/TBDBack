"use strict";
exports.__esModule = true;
exports.Test = void 0;
var mongoose = require("mongoose");
var testSchema = new mongoose.Schema({ name: { type: String } });
exports.Test = mongoose.model('test', testSchema);
