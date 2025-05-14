"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2 } from "lucide-react";
import SubmitButton from "@/components/submit-btn";
import { handleResetPassword } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const handleServerAction = async (formData: FormData) => {
    let {
      title = "Something Went Wrong!",
      description = "Please contact developer to fix this issue",
      redirect,
    }: any = await handleResetPassword(formData, email);
    toast({
      title,
      description,
    });
    if (redirect) {
      router.replace(redirect);
    }
  };

  useEffect(() => {
    if (!email) {
      router.back();
    }
  }, [email, router]);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Code2 className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Reset Password
          </h1>
          <p className="text-sm text-muted-foreground">
            Reset your password to access your account
          </p>
        </div>

        <form action={handleServerAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
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
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              minLength={8}
              pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
              title="Must contain at least 8 characters, including one letter and one number"
              required
            />
          </div>
          <SubmitButton
            text="Reset password"
            loadingText="Setting new password"
          />
        </form>

        <p className="px-8 text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
