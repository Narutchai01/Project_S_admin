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
    value: response.data.token,
  });

  redirect("/dashboard/skincare");
};

export const CheckCookie = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    await redirect("/auth");
  }
};

export const fecthAdmin = async () => {
  await CheckCookie();
  const cookieStore = await cookies();
  const token = await cookieStore.get("token");
  const response = await fetchInstance("/admin/profile", {
    headers: {
      token:
        token?.value ,
    },
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
};

export const fectchSkincares = async () => {
  const response = await fetchInstance("/skincare", {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
};

export const fectchSkincareById = async (id: string) => {
  const response = await fetchInstance(`/skincare/${id}`, {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
};

export const getToken = async() => {
  await CheckCookie();
  const cookieStore = await cookies();
  const token = await cookieStore.get("token");
  return token?.value;
}


export const addSkincare = async (formData: FormData) => {
  await CheckCookie();
  const token = await getToken();

  formData.append("image", formData.get("file") as Blob);
  const response = await fetchInstance("/admin/skincare", {
    method: "POST",
    headers: {
      token: token,
    },
    body: formData,
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
};