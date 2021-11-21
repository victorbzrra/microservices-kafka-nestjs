import * as mongoose from 'mongoose';

export const CoreSchema = new mongoose.Schema({
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  message: {type: String, required: true}
}, { timestamps: true, collection: 'registers'});

export interface Core {
  latitude: number,
  longitude: number,
  message: string
}