"use server";

import { fetchInstance } from "@/lib/fecthInstance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fectchAcnes = async () => {
  const response = await fetchInstance("/acne", {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
}

export const deleteAcnes = async (id: string) => {
  const response = await fetchInstance(`/admin/acne/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
}

export const CheckCookie = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    await redirect("/auth");
  }
};

export const getToken = async() => {
  await CheckCookie();
  const cookieStore = await cookies();
  const token = await cookieStore.get("token");
  return token?.value;
}

export const addAcne = async (formData: FormData) => {
  await CheckCookie();
  const token = await getToken();
  formData.append("image", formData.get("file") as Blob);
  const response = await fetchInstance("/admin/acne", {
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
}



