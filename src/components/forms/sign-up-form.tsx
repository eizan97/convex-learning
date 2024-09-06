import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  fullname: z.string().min(2).max(150),
  email: z.string().min(2).max(150),
  varifyEmail: z.string().min(2).max(150),
  password: z.string().min(2).max(150),
});

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      fullname: "",
      varifyEmail: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-3/4 space-y-3">
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>FullName</FormLabel>
                <FormControl>
                  <Input className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="w-full" placeholder="shortcat@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
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
                <FormControl>
                  <Input className="w-full" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <Button variant="secondary" className="w-full">
          Submit
        </Button>
        <FormDescription>
          Already have account? just{" "}
          <Link className="font-semibold" href="../../auth/sign-in/">
            sign in
          </Link>
        </FormDescription>
      </Form>
    </div>
  );
}
