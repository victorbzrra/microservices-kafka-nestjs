import { Document } from "mongoose";

export class Register extends Document {
  id: number;
  type_transport: string;
  location: {
    latitude: number;
    longitude: number;
  };
  type_message: string;
  message: string;
}
