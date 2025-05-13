import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: number;
  profileImg: string;
  role: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  profileImg: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true
});

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
