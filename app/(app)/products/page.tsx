"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProductCard from "@/components/product-card";
import { getProducts } from "./actions/actions";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "REST API Boilerplate",
    description:
      "Production-ready REST API with authentication and rate limiting",
    price: 49.99,
    category: "Web APIs",
    image:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: "2",
    name: "Image Recognition Model",
    description:
      "Pre-trained ML model for image classification and object detection",
    price: 99.99,
    category: "ML/AI Models",
    image:
      "https://images.unsplash.com/photo-1501159599894-155982264a55?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: "3",
    name: "Data Scraping Suite",
    description: "Automated web scraping tools with proxy rotation",
    price: 79.99,
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: "4",
    name: "E-commerce Platform",
    description: "Complete e-commerce solution with payment integration",
    price: 149.99,
    category: "Applications",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=400&h=300",
  },
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "web-apis", label: "Web APIs" },
  { value: "ml-ai", label: "ML/AI Models" },
  { value: "automation", label: "Automation" },
  { value: "applications", label: "Applications" },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState<any>("");

  const filteredProducts = products && products.filter((product: any) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    getProducts().then((res) => {
      try {
        res = JSON.parse(res);
        console.log(res);
        setProducts(res);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts && filteredProducts.map((product: any) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>
    </div>
  );
}
