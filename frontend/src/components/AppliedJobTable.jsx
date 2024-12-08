import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  // console.log(allAppliedJobs);

  // const allAppliedJobs = [2, 3, 4];
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You haven't applied any job yet.</span>
          ) : (
            // allAppliedJobs.map((item, index) => (
            allAppliedJobs.map((appliedJob) => (
              // <TableRow key={index}>
              <TableRow key={appliedJob._id}>
                {/* <TableCell>22/09/2024</TableCell> */}
                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                {/* <TableCell>Frontend Devloper</TableCell> */}
                <TableCell>{appliedJob.job?.title}</TableCell>
                {/* <TableCell>Google</TableCell> */}
                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-500  text-white "
                        : appliedJob.status === "pending"
                        ? "bg-gray-500 text-black"
                        : "bg-green-500 text-black"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
