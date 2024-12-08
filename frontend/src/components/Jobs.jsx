import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import MainLayout from "./shared/MainLayout";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <MainLayout>
        {/* Main Content Area */}
        <div className="flex-1 max-w-7xl mx-auto mt-5 px-4">
          <div className="flex gap-5">
            {/* Left Side: FilterCard (20% width) */}
            <div className="w-1/5">
              <div className="sticky top-20">
                <FilterCard />
              </div>
            </div>

            {/* Right Side: Job Listings (80% width) */}
            <div className="w-4/5 overflow-y-auto">
              {filterJobs.length <= 0 ? (
                /* Centered "No jobs found" Message */
                <div className="flex items-center justify-center h-full">
                  <span className="text-lg text-red-400">No jobs found</span>
                </div>
              ) : (
                /* Job Listings Grid */
                <div className="pb-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filterJobs.map((job) => (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        key={job?._id}
                      >
                        <Job job={job} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer at the bottom */}
      </MainLayout>
    </div>
  );
};

export default Jobs;
