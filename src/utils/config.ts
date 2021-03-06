import * as env from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  env.config();
}

const PORT = process.env.PORT!;
let MONGODB_URI = process.env.MONGODB_URI!;

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI!;
}

export { MONGODB_URI };
export { PORT };
