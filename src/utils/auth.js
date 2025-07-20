export const BASE_URL = "https://backend-5og6.onrender.com";




export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // optional
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    console.error("Error posting data:", err);
    throw err;
  }
};

export const getData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      credentials: "include",
    });

    return await response.json();
  } catch (err) {
    console.error("Error getting data:", err);
    throw err;
  }
};
