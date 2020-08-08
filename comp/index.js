"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./utils/config");
const http = __importStar(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const test_1 = require("./routes/test");
// Mongo
mongoose_1.default.set('useCreateIndex', true);
const connect = async () => {
    try {
        await mongoose_1.default.connect(`${config_1.MONGODB_URI}`, {
            useNewUrlParser: true
        });
        console.log('Connected to mongodb');
    }
    catch (exception) {
        console.error('error connecting to MongoDB:', exception.message);
    }
};
connect();
const app = express_1.default();
// Middlewares
app.use(express_1.default.static('build'));
app.use(cors_1.default());
app.use(body_parser_1.default());
// Routes
app.use(test_1.testRouter);
// Server
const server = http.createServer(app);
server.listen(config_1.PORT, () => {
    console.log(`App runnin on port ${config_1.PORT}`);
});
//# sourceMappingURL=index.js.map