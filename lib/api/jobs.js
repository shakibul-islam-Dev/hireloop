const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getCompanyJobs(companyId, status) {
  try {
    const response = await fetch(
      `${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      console.error("Failed to fetch jobs. Status:", response.status);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}
