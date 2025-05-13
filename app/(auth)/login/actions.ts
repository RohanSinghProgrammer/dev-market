"use server";

export const handleSignin = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData.entries());
  console.log(email, password);
};
