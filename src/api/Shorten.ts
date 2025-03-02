export const shortenUrl = async (url: string) => {
  try {
    const response = await fetch("http://localhost:3001/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    });

    const data = await response.json();

    if (data.success) {
      return data.shortUrl;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
};
