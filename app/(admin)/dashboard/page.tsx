"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Package,
  ShoppingCart,
  Heart,
  Settings,
  Download,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  const [recentPurchases] = useState([
    {
      id: "1",
      name: "E-commerce API",
      date: "2024-03-20",
      price: 49.99,
      downloadUrl: "#",
    },
    {
      id: "2",
      name: "Image Recognition Model",
      date: "2024-03-15",
      price: 99.99,
      downloadUrl: "#",
    },
  ]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      {/* Quick Actions */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <Link href="/products" className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-primary" />
            <span>Browse Products</span>
          </Link>
        </Card>
        <Card className="p-4">
          <Link href="/cart" className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span>View Cart</span>
          </Link>
        </Card>
        <Card className="p-4">
          <Link href="/dashboard/wishlist" className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" />
            <span>Wishlist</span>
          </Link>
        </Card>
        <Card className="p-4">
          <Link href="/dashboard/settings" className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-primary" />
            <span>Settings</span>
          </Link>
        </Card>
      </div>

      {/* Recent Purchases */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recent Purchases</h2>
          <Link href="/dashboard/purchases">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {recentPurchases.map((purchase) => (
            <Card key={purchase.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">{purchase.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{new Date(purchase.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">
                    ${purchase.price.toFixed(2)}
                  </span>
                  <Button size="sm" className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}