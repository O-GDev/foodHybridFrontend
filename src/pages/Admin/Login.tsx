import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2Icon, LockKeyhole, User, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { partnerSignin } from "@/api/apiEndpoints";
import { PartnerSigninData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import useAuthStore from "@/stores/authStore";
import { AxiosError } from "axios";
import usePartnerSignupStore from "@/stores/partnerSingupStore";

const formSchema = z.object({
  usernameEmail: z.string(),
  password: z.string(),
});

const formFields = [
  {
    name: "usernameEmail",
    label: "Email address or username",
    type: "text",
    icon: <User />,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    icon: <LockKeyhole />,
  },
];

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usernameEmail: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const { setAuth, logout } = useAuthStore();

  const { resetUserData } = usePartnerSignupStore();
  useEffect(() => {
    resetUserData();
  }, [resetUserData]);

  const { mutate, isPending } = useMutation({
    mutationFn: (data: PartnerSigninData) => partnerSignin(data),
    onSuccess: (data) => {
      setAuth(data?.tokens as { access: string; refresh: string });
      toast.success(data?.detail || "Login successful");
      navigate("/admin/overview");
    },
    onError: (error: AxiosError) => {
      const errorMessage = (error.response?.data as { detail: string }).detail;
      logout()
      toast.error(errorMessage);
      console.error("Login error:", error);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // const data: PartnerSigninData = {
    //   username: values.usernameEmail,
    //   password: values.password,
    //   user_type: "admin",
    // };
    // mutate(data);
    
      navigate("/admin/overview");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F9F9F9]">
      <div className="max-w-[510px] w-full p-10 border bg-white border-gray-100 shadow-2xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full"
          >
            <div>
                <h2 className="text-center text-2xl font-semibold">Welcome, Admin</h2>
            </div>
            {formFields.map((formField) => (
              <FormField
                key={formField.name}
                control={form.control}
                name={formField.name as "usernameEmail" | "password"}
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-auth-foreground">
                      {formField.label}
                    </FormLabel>
                    <div className="relative">
                      <input
                        {...field}
                        type={
                          formField.name === "password"
                            ? showPassword
                              ? "text"
                              : "password"
                            : formField.type
                        }
                        className="auth-input"
                      />
                      <div className="absolute h-full flex items-center right-3 top-0 gap-2">
                        {formField.name === "password" && (
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        )}
                        <div
                          className={cn(
                            "flex items-center scale-[0.9]",
                            form.formState.dirtyFields[
                              formField.name as "usernameEmail" | "password"
                            ]
                              ? "text-[#252525]"
                              : "text-[#B1B5B3]"
                          )}
                        >
                          {formField.icon}
                        </div>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              disabled={!form.formState.isDirty}
              className="w-full cursor-pointer py-[18px]"
            >
              {isPending && <Loader2Icon className="animate-spin" />}
              Log in
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
