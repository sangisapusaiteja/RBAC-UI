"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required"
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  const { data: userRoleData, error: userRoleError } = await supabase
    .from("user_roles")
    .insert({
      user_id: data.user?.id,
      role: formData.get("role")?.toString(),
    });
  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect("success", "/sign-in", "true");
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  const { data: userRoleData, error: userRoleError } = await supabase
    .from("user_roles")
    .select("*")
    .eq("role", role)
    .eq("user_id", data?.user?.id);

  if (userRoleData?.length === 0 || error) {
    return encodedRedirect(
      "error",
      "/sign-in",
      error?.message ||
        userRoleError?.message ||
        `User with role ${role} not found`
    );
  }

  return redirect("/protected");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
