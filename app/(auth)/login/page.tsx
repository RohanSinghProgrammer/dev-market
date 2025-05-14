"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2 } from "lucide-react";
import SubmitButton from "@/components/submit-btn";
import { handleSignin } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const handleServerAction = async (formData: FormData) => {
    let {
      title = "Something Went Wrong!",
      description = "Please contact developer to fix this issue",
      user,
      success,
    }: any = await handleSignin(formData);

    if (!success) {
      toast({
        title,
        description,
      });
    }
    if (user) {
      user = JSON.parse(user);
      const { password, ...rest } = user;
      localStorage.setItem("user", JSON.stringify(rest));
      if (user.role === "seller") {
        router.replace("/admin/dashboard");
      } else {
        router.replace("/products");
      }
    }
  };
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Code2 className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <form action={handleServerAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              minLength={8}
              pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
              title="Must contain at least 8 characters, including one letter and one number"
              required
            />
          </div>
          <SubmitButton text="Sign In" loadingText="Signing in" />
        </form>

        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
