import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { Bot, Code2, Database, Terminal } from "lucide-react";

const ProductCard = ({ product }: any) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web APIs":
        return <Code2 className="h-5 w-5" />;
      case "ML/AI Models":
        return <Bot className="h-5 w-5" />;
      case "Automation":
        return <Terminal className="h-5 w-5" />;
      case "Applications":
        return <Database className="h-5 w-5" />;
      default:
        return <Code2 className="h-5 w-5" />;
    }
  };
  return (
    <Link key={product?._id} href={`/products/${product._id}`}>
      <Card className="overflow-hidden">
        <div
          className="aspect-video w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2">
            {getCategoryIcon(product.category)}
            <span className="text-sm text-muted-foreground">
              {product.category}
            </span>
          </div>
          <h3 className="mb-2 font-semibold">{product.name}</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
