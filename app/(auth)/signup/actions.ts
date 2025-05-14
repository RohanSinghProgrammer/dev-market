"use server";

import { hashPassword } from "@/actions/hashPassword";
import { uploadFile } from "@/actions/uploadFile";
import { connectToDB } from "@/db/connect";
import { User } from "@/models/user.model";

export const handleSignup = async (formData: FormData) => {
  try {
    const { profileImg, password, ...rest } = Object.fromEntries(
      formData.entries()
    );
    const maxSize = 512; // 512KB limit

    if (profileImg && (profileImg as File).size > maxSize) {
      return {
        success: true,
        title: "Input File size exceeded.",
        description: "File size exceeds 512KB! Please choose a smaller file.",
      };
    }
    const profileImgUrl = await uploadFile(profileImg as File);
    await connectToDB();
    const newUser = new User({
      ...rest,
      profileImg: profileImgUrl?.publicUrl,
      password: hashPassword(password.toString()),
    });
    await newUser.save();
    return {
      success: true,
      title: "User added successfully!",
      description: "Welcome dear, now you are part of our community!",
      redirect: "/login",
    };
  } catch (err: any) {
    return {
      success: false,
      title: "Something went wrong!",
      description: err?.message,
    };
  }
};
