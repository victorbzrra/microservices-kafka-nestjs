import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema({
  id: Number,
  type_transport: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  type_message: String,
  message: String,
});