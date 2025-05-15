"use server";

import { uploadFile } from "@/actions/uploadFile";
import { connectToDB } from "@/db/connect";
import { Product } from "@/models/product.model";

export const handleAddProduct = async (formData: FormData, user: any) => {
  try {
    let { image, documentation, code, ...rest }: any = Object.fromEntries(
      formData.entries()
    );
    // *  & upload image to storage bucket
    if (image) {
      const uploadImage = await uploadFile(image);
      image = uploadImage;
    } else {
      return {
        status: false,
        title: "File not found",
        description: "Please select an image",
      };
    }
    // * Check Filetype of documentation & upload to storage bucket
    if (
      documentation &&
      (documentation as any).name.toLowerCase().endsWith(".md")
    ) {
      documentation = await uploadFile(documentation as File);
    } else {
      return {
        status: false,
        title: "Invalid File Type",
        description: "Documentation must be a markdown file",
      };
    }
    // * Check Filetype of code & upload to storage bucket
    if (code && (code as any).name.toLowerCase().endsWith(".zip")) {
      code = await uploadFile(documentation as File);
    } else {
      return {
        status: false,
        title: "Invalid File Type",
        description: "Documentation must be a markdown file",
      };
    }
    // * Upload data into mongoDB
    await connectToDB();
    const newProduct = new Product({
      image: image?.publicUrl,
      documentation: documentation?.publicUrl,
      code: code?.publicUrl,
      sellerName: user?.name,
      sellerEmail: user?.email,
      sellerId: user?._id,
      ...rest,
    });
    await newProduct.save();
    return {
      status: true,
      title: "Product Added Successfully",
      description:
        "Product Added Successfully, Now you can view it in the my products",
    };
  } catch (err: any) {
    return {
      status: false,
      title: "Something went wrong!",
      description: err.message,
    };
  }
};
