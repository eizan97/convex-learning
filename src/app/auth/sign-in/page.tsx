"use client";
import SignInForm from "@/components/forms/sign-in-form";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import Cat from "../../../../public/Logo.png";
import Image from "next/image";
import { SignInFormPasswordAndVerifyViaCode } from "./pages/SignInFormPasswordAndVerifyViaCode";

type Props = {};

export default function SignIn(props: Props) {
  const { signIn } = useAuthActions();
  return (
    <div className="w-full h-screen flex flex-col gap-24">
      <div className="flex items-center gap-2">
        <Image src={Cat} width="20" height="20" alt="cat" />
        <h2 className="text-md font-thin">Shortcat</h2>
      </div>

      <div className="flex items-center w-[400px] gap-8 mx-auto">
        <SignInFormPasswordAndVerifyViaCode />
      </div>
      {/* <h2 className="text-xl">Please Fill this form to continue to sign in</h2> */}
      
    </div>
  );
}
