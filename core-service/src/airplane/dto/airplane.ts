import { Document } from "mongoose";

export class Airplane extends Document{
  latitude: number;
  longitude: number;
  type_message: string; 
  message: string;
}