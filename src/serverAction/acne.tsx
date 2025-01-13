"use server";

import { fetchInstance } from "@/lib/fecthInstance";

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



