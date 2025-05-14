"use server";

import { hashPassword } from "@/actions/hashPassword";
import { User } from "@/models/user.model";

export const handleResetPassword = async (
  formData: FormData,
  email: string
) => {
  try {
    let { password, confirmPassword } = Object.fromEntries(formData.entries());
    const user = await User.findOne({
      email,
    });
    // * Check passwords matches together or not
    if (password !== confirmPassword) {
      return {
        success: false,
        title: "Oops!",
        description: "Looks like your passwords don't match.",
      };
    }
    // * If user not exists
    if (!user) {
      return {
        success: false,
        title: "User doesn't exists",
        description: "Looks like you don't have an account yet.",
      };
    }
    // * Set new password
    password = hashPassword(password.toString());
    await User.updateOne({ email }, { password });
    return {
      success: true,
      title: "Password reset successfully",
      description: "Now you can login with your new password.",
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
