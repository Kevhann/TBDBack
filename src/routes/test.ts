import * as express from 'express';
import { Test } from '../models/test';
export const testRouter = express.Router();

testRouter.get('/test', async (_req, res) => {
  res.json(await Test.findOne({}));
});
testRouter.get('/ping', (_req, res) => res.json({ time: new Date(), message: 'pong' }));
