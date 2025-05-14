"use server";

import { hashPassword } from "@/actions/hashPassword";
import { User } from "@/models/user.model";

export const handleSignin = async (formData: FormData) => {
  try {
    const { email, password } = Object.fromEntries(formData.entries());
    const user = await User.findOne({
      email,
    });
    // * If user not exists
    if (!user) {
      return {
        success: false,
        title: "User doesn't exists",
        description: "Looks like you don't have an account yet.",
      };
    }
    // * If user exists but password is incorrect
    if (user.password !== hashPassword(password.toString())) {
      return {
        success: false,
        title: "Incorrect password",
        description: "Looks like your password is incorrect.",
      };
    }
    // * If user exists and password is correct
    return {
      success: true,
      user: JSON.stringify(user),
    };
  } catch (err: any) {
    return {
      success: false,
      title: "Something went wrong!",
      description: err?.message,
    };
  }
};
