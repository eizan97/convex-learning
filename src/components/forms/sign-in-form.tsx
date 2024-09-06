import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2).max(150),
  password: z.string().min(2).max(150),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-3/4 space-y-3">
      <Form {...form}>
        <form className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="shortcat@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                {/* <Button variant="link">Forgot Password?</Button> */}
                <FormControl>
                  <Input className="w-full" placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
        <Button variant="secondary" className="w-full">
          Submit
        </Button>
        <FormDescription>
          Dont't have account don't worry just{" "}
          <Link className="font-semibold" href="../../auth/sign-up/">
            sign up
          </Link>
        </FormDescription>
      </Form>
    </div>
  );
}
