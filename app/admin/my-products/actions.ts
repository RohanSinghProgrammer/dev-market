"use server";

import { connectToDB } from "@/db/connect";
import { Product } from "@/models/product.model";

export const getProductsById = async (uid: string) => {
  try {
    await connectToDB();
    const response = await Product.find({
      sellerId: uid,
    });
    return JSON.stringify(response);
  } catch (err: any) {
    return err.message;
  }
};
