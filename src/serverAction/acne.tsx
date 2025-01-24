"use server";

import { fetchInstance } from "@/lib/fecthInstance";
import { CheckCookie, getToken } from "@/serverAction/server_action";

export const fectchAcnes = async () => {
  const response = await fetchInstance("/acne", {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
}

export const deleteAcne = async (id: number) => {
  const response = await fetchInstance(`/admin/acne/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
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

export const fectchAcneById = async (id: string) => {
  const response = await fetchInstance(`/acne/${id}`, {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
}

export const updateAcne = async ( id: number, formData: FormData) => {
  formData.append("image", formData.get("file") as Blob);
  const response = await fetchInstance(`/admin/acne/${id}`, {
    method: "PUT",
    body: formData,
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
}



