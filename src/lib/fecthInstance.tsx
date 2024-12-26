export const fetchInstance = async (url: string, options = {}) => {
  const baseUrl = String(process.env.NEXT_PUBLIC_API_URL);

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const fullUrl = `${baseUrl}${url}`;

  try {
    const response = await fetch(fullUrl, mergedOptions);

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(errorDetails.message || "An error occurred");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
