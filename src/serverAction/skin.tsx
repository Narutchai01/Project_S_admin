import { fetchInstance } from "@/lib/fecthInstance";
import { CheckCookie, getToken } from "@/serverAction/server_action";

export const fetchSkin = async () => {
  const response = await fetchInstance("/skin", {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
  });
  return response;
};

export const deleteSkin = async (id: number) => {
  try {
    const response = await fetchInstance(`/admin/skin/${id}`, {
      method: "DELETE",
    });
    console.log("Success:", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const addSkin = async (formData: FormData) => {
  await CheckCookie();
  const token = await getToken();
  formData.append("image", formData.get("file") as Blob);
  const response = await fetchInstance("/admin/skin", {
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

export const fetchSkinById = async (id: string) => {
  const response = await fetchInstance(`/skin/${id}`, {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
  });
  return response;
};

export const updateSkin = async (id: number, formData: FormData) => {
  formData.append("image", formData.get("file") as Blob);
  const response = await fetchInstance(`/admin/skin/${id}`, {
    method: "PUT",
    body: formData,
  }).catch((error) => {
    console.error("Error:", error);
    return error;
  });
  return response;
};