"use server";

import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { redirect } from "next/navigation";
import { signUpFirebaseUser } from "./Firebase.actions";

export const onLogin = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);
  signInWithEmailAndPassword(auth, email.toString(), password.toString()).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log("--- LOGGED IN ---", user);
    }
  );
};

export const onSignup = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData)

  try {
    const user = await signUpFirebaseUser(email.toString(), password.toString());
    console.log(user);

    redirect("/login");
  } catch (error: any) {
    console.error(`ERROR: ${error.code} - ${error.message}`);
  }
};
