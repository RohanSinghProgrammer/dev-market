"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleSignup } from "./actions";
import SubmitButton from "@/components/submit-btn";

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Code2 className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>

        <form action={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              required
              name="name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              required
              name="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="123-456-7890"
              type="tel"
              required
              name="phone"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profileImage">Profile Image</Label>
            <Input
              id="profileImage"
              type="file"
              required
              name="profileImg"
              accept="image/*"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue="customer" name="role">
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seller">Seller</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              name="password"
              minLength={8}
              pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
              title="Must contain at least 8 characters, including one letter and one number"
            />
          </div>
          <SubmitButton text="Sign Up" loadingText="Creating your account" />
        </form>

        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
