import mongoose, { Schema, Document } from "mongoose";

export interface IdbTable extends Document {
  name: string;
  totalCount: number;
}

const dbTable: Schema = new Schema({
  name: String,
  number: Number,
});

dbTable.set("toJSON", {
  virtuals: true,
});
export default mongoose.model<IdbTable>("DbTable", dbTable);
