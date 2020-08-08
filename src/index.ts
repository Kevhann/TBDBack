import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGODB_URI, PORT } from './utils/config';
import * as http from 'http';
import bodyParser from 'body-parser';
import { testRouter } from './routes/test';

// Mongo
mongoose.set('useCreateIndex', true);
const connect = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}`, {
      useNewUrlParser: true
    });
    console.log('Connected to mongodb');
  } catch (exception) {
    console.error('error connecting to MongoDB:', exception.message);
  }
};
connect();

const app = express();
// Middlewares
app.use(express.static('build'));
app.use(cors());
app.use(bodyParser());

// Routes
app.use(testRouter);

// Server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`App runnin on port ${PORT}`);
});
