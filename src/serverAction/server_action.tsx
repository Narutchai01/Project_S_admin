"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchInstance } from "@/lib/fecthInstance";
import { Ilogin } from "@/interface/admin";

export const handlerLogin = async (formData: FormData) => {
  const cookieStore = await cookies();
  const data: Ilogin = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!data.email || !data.password) {
    return;
  }

  const response = await fetchInstance("/admin/login", {
    method: "POST",
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error("Error:", error);
  });

  await cookieStore.set({
    name: "token",
    value: response.token,
  });

  redirect("/dashboard/skincare");
};

export const CheckCookie = async () => {
  const cookieStore = await cookies();
  const token = await cookieStore.get("token");

  if (!token) {
    await redirect("/auth");
  }
};

