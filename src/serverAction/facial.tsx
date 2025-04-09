import { fetchInstance } from "@/lib/fecthInstance";
import { CheckCookie, getToken } from "@/serverAction/server_action";

export const fetchFacial = async () => {
  const response = await fetchInstance("/facial", {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
  });
  return response;
};

export const deleteFacial = async (id: number) => {
  try {
    await CheckCookie();
    const token = await getToken();

    const response = await fetchInstance(`/admin/facial/${id}`, {
      method: "DELETE",
      headers: {
        token: token,
      },
    });
    console.log("Success:", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};


export const fecthFacialByID = async (id: string) => {
  const response = await fetchInstance(`/facial/${id}`, {
    method: "GET",
  }).catch((error) => {
    console.error("Error:", error);
  });
  return response;
};

export const addFacial = async (formData: FormData) => {
  await CheckCookie();
  const token = await getToken();

  formData.append("image", formData.get("file") as Blob);
  const response = await fetchInstance("/admin/facial", {
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

export const updateFacial = async (id: number, formData: FormData) => {
  await CheckCookie();
  const token = await getToken();

  formData.append("image", formData.get("file") as Blob);
  const response = await fetchInstance(`/admin/facial/${id}`, {
    method: "PUT",
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
