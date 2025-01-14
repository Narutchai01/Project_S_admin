import { fetchInstance } from "@/lib/fecthInstance";


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
    }