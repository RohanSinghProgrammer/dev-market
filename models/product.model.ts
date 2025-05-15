import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string;
  features: string;
  requirements: string;
  resources: string;
  documentation: string;
  code: string;
  link?: string;
  sellerName: string;
  sellerEmail: string;
  sellerId: string;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: String, required: true },
    features: { type: String, required: true },
    requirements: { type: String, required: true },
    resources: { type: String, required: true },
    documentation: { type: String, required: true },
    code: { type: String, required: true },
    link: { type: String },
    sellerName: { type: String, required: true },
    sellerEmail: { type: String, required: true },
    sellerId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export { ProductModel as Product };

