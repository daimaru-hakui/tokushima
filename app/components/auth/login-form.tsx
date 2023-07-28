"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/input/text-input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signIn(data);
      router.push("/");
    } catch (error) {
      alert("ログインに失敗しました");
    } finally {
      router.refresh();
    }
  };

  const signIn = async (data: Inputs) => {
    await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <div className="text-center">LOGIN</div>
      <div className="flex flex-col">
        <TextInput
          className="mt-4"
          type="text"
          label="email"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && (
          <div className="ml-2 text-red-500">emailを入力してください</div>
        )}
        <TextInput
          className="mt-4"
          type="password"
          label="password"
          register={{ ...register("password", { required: true }) }}
        />
        {errors.password && (
          <div className="ml-2 text-red-500">passwordを入力してください</div>
        )}
        <Button type="submit" bg="bg-black" className="mt-10">
          ログイン
        </Button>
      </div>
    </form>
  );
};
