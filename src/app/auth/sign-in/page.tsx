"use client";
import SignInForm from "@/components/forms/sign-in-form";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import Cat from "../../../../public/Logo.png";
import Image from "next/image";

type Props = {};

export default function SignIn(props: Props) {
  const { signIn } = useAuthActions();
  return (
    <div className="w-full h-screen flex flex-col gap-24">
      <div className="flex items-center gap-2">
        <Image src={Cat} width="20" height="20" alt="cat" />
        <h2 className="text-md font-thin">Shortcat</h2>
      </div>
      <div className="flex flex-col items-center w-[500px] gap-8">
        <h2 className="text-xl">Please Fill this form to continue to sign in</h2>
        <div className="gap-6 flex w-[380px]">
          <Button className="w-full" variant="secondary" onClick={() => void signIn("github")}>
            GitHub
          </Button>
          <Button className="w-full" variant="secondary">
            Google
          </Button>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
