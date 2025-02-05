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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });

  if (response) {
    await cookieStore.set({
      name: "token",
      value: response.data.token,
    });

    redirect("/dashboard/skincare");
  }

  return response;
};

export const CheckCookie = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    await redirect("/auth");
  }
};

export const getToken = async () => {
  await CheckCookie();
  const cookieStore = await cookies();
  const token = await cookieStore.get("token");
  return token?.value;
};

export const fecthAdmin = async () => {
  await CheckCookie();
  const cookieStore = await cookies();
  const token = await cookieStore.get("token");
  const response = await fetchInstance("/admin/profile", {
    headers: {
      token: token?.value,
    },
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
};

export const handlerLogout = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    if (!token) {
      return;
    }
    await cookieStore.delete("token");
    redirect("/auth");
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};
