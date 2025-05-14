"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.role === "seller") {
          router.replace("/admin/dashboard");
        } else if (parsedUser.role === "customer") {
          router.replace("/products");
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        toast({
          title: "Error",
          description: "Failed to parse user from localStorage",
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return <div className=" max-sm:px-4">{children}</div>;
};

export default AuthLayout;
