import { useAuthActions } from "@convex-dev/auth/react";
import { CodeInput } from "@/app/auth/sign-in/pages/CodeInput";
import { ResetPasswordWithEmailCode } from "@/app/auth/sign-in/pages/ResetPasswordWithEmailCode";
import { SignInMethodDivider } from "@/app/auth/sign-in/pages/SignInMethodDivider";
import { SignInWithPassword } from "@/app/auth/sign-in/pages/SignInWithPassword";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

/**
 * Users choose between OAuth providers or email and password combo
 * with required email verification and optional password reset via OTP.
 */
export function SignInFormPasswordAndVerifyViaCode() {
  const { signIn } = useAuthActions();
  const { toast } = useToast();
  const [step, setStep] = useState<"signIn" | { email: string } | "forgot">("signIn");
  const [submitting, setSubmitting] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-[450px]">
      {step === "signIn" ? (
        <>
          <h2 className="font-semibold text-2xl tracking-tight">Sign in or create an account</h2>
          <div className="gap-6 flex">
            <Button className="w-full flex gap-2" variant="secondary" onClick={() => void signIn("github")}>
              <GitHubLogoIcon /> Github
            </Button>
            <Button className="w-full flex gap-2" variant="secondary">
              <TwitterLogoIcon /> Google
            </Button>
          </div>
          <SignInMethodDivider />
          <SignInWithPassword handleSent={(email) => setStep({ email })} handlePasswordReset={() => setStep("forgot")} provider="password-code" />
        </>
      ) : step === "forgot" ? (
        <ResetPasswordWithEmailCode provider="password-code" handleCancel={() => setStep("signIn")} />
      ) : (
        <>
          <h2 className="font-semibold text-2xl tracking-tight">Check your email</h2>
          <p className="text-muted-foreground text-sm">Enter the 8-digit code we sent to your email address.</p>
          <form
            className="flex flex-col"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitting(true);
              const formData = new FormData(event.currentTarget);
              signIn("password-code", formData).catch((error) => {
                console.error(error);
                toast({
                  title: "Code could not be verified, try again",
                  variant: "destructive",
                });
                setSubmitting(false);
              });
            }}
          >
            <label htmlFor="email">Code</label>
            <CodeInput />
            <input name="email" value={step.email} type="hidden" />
            <input name="flow" value="email-verification" type="hidden" />
            <Button type="submit" disabled={submitting}>
              Continue
            </Button>
            <Button type="button" variant="link" onClick={() => setStep("signIn")}>
              Cancel
            </Button>
          </form>
        </>
      )}
      <Toaster />
    </div>
  );
}
