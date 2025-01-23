"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MinusCircle,
  PlusCircle,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/lib/store";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setIsUpdating(true);
    updateQuantity(id, newQuantity);
    setIsUpdating(false);
  };

  const handleRemoveItem = (id: string) => {
    setIsUpdating(true);
    removeItem(id);
    setIsUpdating(false);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center py-8">
        <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
        <h1 className="mb-2 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-muted-foreground">
          Looks like you haven&apos;t added any products to your cart yet.
        </p>
        <Link href="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={isUpdating || item.quantity <= 1}
                      className="text-muted-foreground hover:text-foreground disabled:opacity-50"
                    >
                      <MinusCircle className="h-5 w-5" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      disabled={isUpdating}
                      className="text-muted-foreground hover:text-foreground disabled:opacity-50"
                    >
                      <PlusCircle className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      disabled={isUpdating}
                      className="ml-2 text-red-500 hover:text-red-600 disabled:opacity-50"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="my-4 border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
              </div>
              <Link href={"/checkout"}>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}