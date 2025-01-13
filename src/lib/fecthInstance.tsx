export const fetchInstance = async (url: string, options = {}) => {
  const baseUrl = String(process.env.NEXT_PUBLIC_API_URL);

  const defaultOptions = {
    method: 'GET', // Default method
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const fullUrl = `${baseUrl}${url}`;

  try {
    const response = await fetch(fullUrl, mergedOptions);

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(errorDetails || "An error occurred");
    }

    const responseText = await response.text();
    return responseText ? JSON.parse(responseText) : {};
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
