"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignUpForm from "@/components/auth/sign-up-form";
import LoginForm from "@/components/auth/login-form";
import { z } from "zod";

import { formSchema as signupSchema } from "@/components/auth/sign-up-form";
import { formSchema as loginSchema } from "@/components/auth/login-form";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const onSubmit = async (
    data: z.infer<typeof signupSchema> | z.infer<typeof loginSchema>
  ) => {
    if (isLogin) {
      const response = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      console.log(response);
      return;
    }
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        console.error(`Error: ${responseData.message}`);
        return;
      }
      console.log(responseData.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full p-5 flex flex-col gap-y-3">
      <div className="flex flex-col gap-y-1">
        <h1 className="font-bold text-xl">Welcome to Mjölnir</h1>
        <p className="text-sm text-muted-foreground">
          Log in or create an account to continue
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{isLogin ? "Log in" : "Sign up"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-2">
            {isLogin ? (
              <LoginForm onSubmitParent={onSubmit} />
            ) : (
              <SignUpForm onSubmitParent={onSubmit} />
            )}
            <Button
              type="button"
              variant={"ghost"}
              onClick={() => setIsLogin((prevState) => !prevState)}
            >
              {isLogin ? "Create account" : "Log in"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default AuthPage;
