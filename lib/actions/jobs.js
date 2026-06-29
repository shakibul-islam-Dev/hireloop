"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createJob(newJobData) {
  try {
    const response = await fetch(`${baseUrl}/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJobData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      return { success: false, error: "Server responded with an error." };
    }

    return await response.json();
  } catch (error) {
    console.error("Database/Network Error:", error);
    return { success: false, error: "Network or connection failed." };
  }
}
