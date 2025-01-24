
export const fetchInstance = async (url: string, options = {}) => {
  const baseUrl = String(process.env.NEXT_PUBLIC_API_URL);

  const defaultOptions = {
    method: "GET",
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const fullUrl = `${baseUrl}${url}`;

  try {
    const response = await fetch(fullUrl, mergedOptions);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
};