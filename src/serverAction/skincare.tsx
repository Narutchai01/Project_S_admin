
import { fetchInstance } from "@/lib/fecthInstance";
import { CheckCookie, getToken } from "@/serverAction/server_action";

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
  
    export const deleteSkincare = async (id: number) => {
        await CheckCookie();
        const token = await getToken();
    
        const response = await fetchInstance(`/admin/skincare/${id}`, {
            method: "DELETE",
            headers: {
                token: token,
            },
        }).catch((error) => {
            console.error("Error:", error);
            return error;
        });
        return response;
    };

    export const updateSkincare = async (id: number, formData: FormData) => {
        await CheckCookie();
        const token = await getToken();

        formData.append("image", formData.get("file") as Blob);
        const response = await fetchInstance(`/admin/skincare/${id}`, {
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
    }