"use server";

import { uploadFile } from "@/actions/uploadFile";
import { connectToDB } from "@/db/connect";
import { User } from "@/models/user.model";

export const handleSignup = async (formData: FormData) => {
  const { profileImg, ...rest } = Object.fromEntries(formData.entries());
  const profileImgUrl = await uploadFile(profileImg as File);
  await connectToDB();
  const newUser = new User({ ...rest, profileImg: profileImgUrl?.publicUrl });
  await newUser.save();
  // return { success: true, message: "User added successfully!" };
};
