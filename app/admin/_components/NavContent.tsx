"use client";

import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChartCandlestick,
  LogOut,
  Package,
  Plus,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavContent = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const pathname = usePathname();
  const router = useRouter();
  const activeTab = pathname || "dashboard";
  const handleRedirect = (tab: string) => {
    router.push(`/admin/${tab}`);
    closeDrawer();
  };
  const handleLogout = () => {
    closeDrawer();
    localStorage.removeItem("user");
    router.replace("/login");
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col space-y-2 w-full flex-1 overflow-y-auto">
        <Button
          variant={activeTab === "/admin/dashboard" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => handleRedirect("dashboard")}
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button
          variant={activeTab === "/admin/my-products" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => handleRedirect("my-products")}
        >
          <Package className="mr-2 h-4 w-4" />
          My Products
        </Button>
        <Button
          variant={activeTab === "/admin/add-product" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => handleRedirect("add-product")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
        <Button
          variant={activeTab === "/admin/stock-predictor" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => handleRedirect("stock-predictor")}
        >
          <ChartCandlestick className="mr-2 h-4 w-4" />
          Stock Predictor
        </Button>
      </div>
      <Button
        variant={"outline"}
        className="justify-start text-red-500 hover:text-red-600"
        onClick={handleLogout}
      >
        <LogOut className="mr-2 h-4 w-4 text-red-500 hover:text-red-600" />
        Logout
      </Button>
    </div>
  );
};

export default NavContent;
