import JobListingsContent from "@/components/Pages/Dashboard/Company/JobListingsContent";
import { getAllJobsAction } from "../_actions";

const CompanyJobListingsPage = async () => {
  const jobListings = await getAllJobsAction();
  return <JobListingsContent jobListings={jobListings?.data} />;
};

export default CompanyJobListingsPage;
