"use client";
import SignUpForm from "@/components/forms/sign-up-form";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import React from "react";

type Props = {};

export default function SignUp(props: Props) {
  const { signIn } = useAuthActions();
  return (
    <div className="w-full h-screen flex place-content-center items-center">
      <div className="w-[500px] flex flex-col justify-center items-center gap-6">
        <Button className="w-3/4" variant="secondary" onClick={() => void signIn("github")}>
          GitHub
        </Button>
        <SignUpForm />
      </div>
    </div>
  );
}
