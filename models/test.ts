import * as mongoose from 'mongoose';

const testSchema = new mongoose.Schema({ name: { type: String } });

export const Test = mongoose.model('test', testSchema);
