import { getCompanyJobs } from "@/lib/api/jobs";
import { Table } from "@heroui/react";

const Recuiterjobs = async () => {
  const companyId = "company_123";
  // status টিও পাস করা জরুরি
  const jobs = await getCompanyJobs(companyId, "active");

  console.log("company jobs", jobs);

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Job listings" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Job Title</Table.Column>
            <Table.Column>Type</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Location</Table.Column>
          </Table.Header>
          <Table.Body>
            {/* এখানে ম্যাপ ব্যবহার করে সব জব দেখানো হবে */}
            {jobs && jobs.length > 0 ? (
              jobs.map((job) => (
                <Table.Row key={job._id}>
                  <Table.Cell>{job.jobTitle || "N/A"}</Table.Cell>
                  <Table.Cell>{job.jobType || "N/A"}</Table.Cell>
                  <Table.Cell>{job.status || "N/A"}</Table.Cell>
                  <Table.Cell>{job.location || "Remote"}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={4} className="text-center">
                  No jobs found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default Recuiterjobs;
