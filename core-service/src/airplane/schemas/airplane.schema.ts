import * as mongoose from 'mongoose';

export const AirplaneSchema = new mongoose.Schema({
  id: Number,
  latitude: Number,
  longitude: Number,
  type_message: String, 
  message: String
})