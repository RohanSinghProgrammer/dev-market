"use client";

import SubmitButton from "@/components/submit-btn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink } from "lucide-react";
import React from "react";
import { handleAddProduct } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const AddProduct = () => {
  const { toast } = useToast();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const onSubmit = async (formData: FormData) => {
    const { status, title, description } = await handleAddProduct(
      formData,
      user
    );
    toast({
      title,
      description,
    });
  };
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product Name
              </label>
              <Input required placeholder="Enter product name" name="name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                placeholder="Enter product description"
                name="description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Product Image
              </label>
              <Input
                required
                type="file"
                placeholder="Enter product Image"
                name="image"
                accept="image/*"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <Input
                required
                type="number"
                placeholder="Enter price"
                name="price"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tags</label>
              <Input
                required
                placeholder="Enter tags (comma separated)"
                name="tags"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Key Features
              </label>
              <Textarea
                placeholder="Enter key features (comma separated)"
                name="features"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Technical Requirements
              </label>
              <Textarea
                placeholder="Enter technical requirements (comma separated)"
                name="requirements"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Included Resources
              </label>
              <Textarea
                placeholder="Enter included resources (comma separated)"
                name="resources"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Documentation (README.md)
              </label>
              <Input
                required
                type="file"
                name="documentation"
                placeholder="Add Project Documentation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Source Code
              </label>
              <Input
                required
                type="file"
                name="code"
                placeholder="Add Project Documentation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Live Demo Link
              </label>
              <div className="flex space-x-2">
                <Input placeholder="Enter live demo URL" name="link" />
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <SubmitButton text="Add Product" loadingText="Adding Product..." />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProduct;
