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

    // ১. রেসপন্স চেক করুন
    if (!response.ok) {
      // যদি সার্ভার এরর দেয়, তবে রেসপন্স টেক্সট পড়ুন এবং এরর দিন
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      return { success: false, error: "Server responded with an error." };
    }

    // ২. সফল হলে ডেটা রিটার্ন করুন
    return await response.json();
  } catch (error) {
    console.error("Database/Network Error:", error);
    return { success: false, error: "Network or connection failed." };
  }
}
