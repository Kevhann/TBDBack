var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.")
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
define("utils/config", ["require", "exports", "dotenv"], function (
  require,
  exports,
  dotenv_1
) {
  "use strict"
  exports.__esModule = true
  exports.PORT = exports.MONGODB_URI = void 0
  dotenv_1 = __importDefault(dotenv_1)
  if (process.env.NODE_ENV !== "production") {
    dotenv_1["default"].config()
  }
  var PORT = process.env.PORT
  exports.PORT = PORT
  var MONGODB_URI = process.env.MONGODB_URI
  exports.MONGODB_URI = MONGODB_URI
  if (process.env.NODE_ENV === "test") {
    exports.MONGODB_URI = MONGODB_URI = process.env.TEST_MONGODB_URI
  }
})
define("models/test", ["require", "exports", "mongoose"], function (
  require,
  exports,
  mongoose_1
) {
  "use strict"
  exports.__esModule = true
  exports.Test = void 0
  mongoose_1 = __importDefault(mongoose_1)
  var testSchema = new mongoose_1["default"].Schema({ name: { type: String } })
  // testSchema.set("toJSON", {
  //   transform: (_document, returnedObject) => {
  //     returnedObject.id = returnedObject._id
  //     delete returnedObject._id
  //     delete returnedObject.__v
  //   }
  // })
  exports.Test = mongoose_1["default"].model("test", testSchema)
})
define("index", [
  "require",
  "exports",
  "express",
  "cors",
  "mongoose",
  "utils/config",
  "http",
  "models/test",
  "body-parser"
], function (
  require,
  exports,
  express_1,
  cors_1,
  mongoose_2,
  config_1,
  http_1,
  test_1,
  body_parser_1
) {
  "use strict"
  exports.__esModule = true
  express_1 = __importDefault(express_1)
  cors_1 = __importDefault(cors_1)
  mongoose_2 = __importDefault(mongoose_2)
  http_1 = __importDefault(http_1)
  body_parser_1 = __importDefault(body_parser_1)
  mongoose_2["default"].set("useCreateIndex", true)
  var connect = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var exception_1
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3])
            return [
              4 /*yield*/,
              mongoose_2["default"].connect(
                "mongodb+srv://TBDAdmin:Troxta2xGxkiG5Wb@tbdcluster.rnme5.mongodb.net/TBDMongo?retryWrites=true&w=majority",
                {
                  useNewUrlParser: true
                }
              )
            ]
          case 1:
            _a.sent()
            console.log("Connected to mongodb")
            return [3 /*break*/, 3]
          case 2:
            exception_1 = _a.sent()
            console.error("error connecting to MongoDB:", exception_1.message)
            return [3 /*break*/, 3]
          case 3:
            return [2 /*return*/]
        }
      })
    })
  }
  connect()
  var app = express_1["default"]()
  app.use(express_1["default"].static("build"))
  app.use(cors_1["default"]())
  app.use(body_parser_1["default"]())
  app.get("/ping", function (_req, res) {
    return res.send("pong")
  })
  app.get("/test", function (_req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, _b
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            console.log("test")
            _b = (_a = res).json
            return [4 /*yield*/, test_1.Test.findOne({})]
          case 1:
            _b.apply(_a, [_c.sent()])
            return [2 /*return*/]
        }
      })
    })
  })
  var server = http_1["default"].createServer(app)
  server.listen(config_1.PORT, function () {
    console.log("App runnin on port " + config_1.PORT)
  })
})
