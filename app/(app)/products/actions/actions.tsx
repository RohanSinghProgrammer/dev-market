"use server"

import { connectToDB } from "@/db/connect";
import { Product } from "@/models/product.model";

export const getProducts = async () => {
  try {
    await connectToDB();
    const response = await Product.find();
    return JSON.stringify(response);
  } catch (err: any) {
    return err.message;
  }
};
