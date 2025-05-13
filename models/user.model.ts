// src/models/user.model.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

/* ? -> Sample Code for server action of creating a new user !

"use server";

import { connectToDB } from "@/db/connect";
import { User, IUser } from "@/models/user.model";

export const addUser = async (name: string, email: string): Promise<{ success: boolean; message: string }> => {
  await connectToDB();
  const newUser = new User({ name, email });
  await newUser.save();
  return { success: true, message: "User added successfully!" };
};

export const getUsers = async (): Promise<IUser[]> => {
  await connectToDB();
  return await User.find();
};

*/
