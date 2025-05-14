import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_PASSWORD_SECRET || "your-secret-key";

// Function to hash a password with a secret key
export const hashPassword = (password: string): string => {
  return CryptoJS.HmacSHA256(password, SECRET_KEY).toString();
};

// Function to verify a password
export const verifyPassword = (
  password: string,
  hashedPassword: string
): boolean => {
  return hashPassword(password) === hashedPassword;
};
