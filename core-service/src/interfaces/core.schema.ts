import * as mongoose from 'mongoose';

export const CoreSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  message: String
}, { timestamps: true, collection: 'register'});