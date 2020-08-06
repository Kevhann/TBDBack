import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { MONGODB_URI, PORT } from "./utils/config"
import http from "http"
import { Test } from "./models/test"
import bodyParser from "body-parser"

mongoose.set("useCreateIndex", true)
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://TBDAdmin:Troxta2xGxkiG5Wb@tbdcluster.rnme5.mongodb.net/TBDMongo?retryWrites=true&w=majority",
      {
        useNewUrlParser: true
      }
    )
    console.log("Connected to mongodb")
  } catch (exception) {
    console.error("error connecting to MongoDB:", exception.message)
  }
}
connect()

const app = express()

app.use(cors())
app.use(bodyParser())
app.get("/ping", (_req, res) => res.send("pong"))
app.get("/test", async (_req, res) => {
  console.log("test")

  res.json(await Test.findOne({}))
})
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`App runnin on port ${PORT}`)
})
