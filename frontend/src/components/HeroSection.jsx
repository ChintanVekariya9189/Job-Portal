import { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <div>
          <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium hover:font-extrabold cursor-pointer">
            No. 1 Job Hunt Website
          </span>
          <div className="pt-6 mb-4">
            <h1 className="text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              <span className="hover:font-extrabold cursor-pointer">
                Search,
              </span>{" "}
              <span className="hover:font-extrabold cursor-pointer">Apply</span>
              <span className="hover:font-extrabold cursor-pointer">
                &
              </span>{" "}
              <br />
              <span className="hover:font-extrabold cursor-pointer">
                Get Your
              </span>{" "}
              <span className="text-[#6A38C2] hover:font-extrabold cursor-pointer">
                Dream Jobs
              </span>
            </h1>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            aspernatur temporibus nihil tempora dolor!
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find your dream jobs"
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none border-none w-full"
            />
            <Button
              onClick={searchJobHandler}
              className="rounded-r-full bg-[#6A38C2]"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
