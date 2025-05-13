"use server";

import { uploadFile } from "@/actions/uploadFile";

export const handleSignup = async (formData: FormData) => {
  const { profileImg, ...rest } = Object.fromEntries(formData.entries());
  console.log(profileImg, rest);
  const profileImgUrl = await uploadFile(profileImg as File);
  console.log(profileImgUrl);
};
