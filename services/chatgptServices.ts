export const getCalorieEstimate = async (foodDescription: string): Promise<string> => {
    const res = await fetch("https://your-backend-url/api/chatgpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foodDescription }),
    });
  
    const data = await res.json();
    return data.response || "No estimate available.";
  };
  