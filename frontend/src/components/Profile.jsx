import { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import MainLayout from "./shared/MainLayout";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth) || {};

  const userName = user?.fullname || "Full Name";
  const userBio = user?.profile?.bio || "Bio not available";
  const userPhoto =
    user?.profile?.profilePhoto ||
    "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg";
  const userEmail = user?.email || "Email not provided";
  const userPhone = user?.phoneNumber || "Phone not available";
  const skills = user?.profile?.skills || [];

  const resumeLink = user?.profile?.resume
    ? `${user.profile.resume}?t=${new Date().getTime()}`
    : null;

  return (
    <div>
      <MainLayout>
        <div className="max-w-4xl mx-auto bg-white border border-black rounded-2xl my-5 p-8 shadow-md shadow-gray-500">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24 rounded-full border-2 border-gray-500 shadow-md shadow-gray-500">
                <AvatarImage
                  src={userPhoto}
                  alt="User Avatar"
                  // className="rounded-full"
                />
              </Avatar>
              <div>
                <h1 className="font-medium text-xl">{userName}</h1>
                <p>{userBio}</p>
              </div>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="text-right"
              variant="outline"
            >
              <Pen />
            </Button>
          </div>
          <div className="my-5">
            <div className="flex items-center gap-3 my-2">
              <Mail />
              <span>{userEmail}</span>
            </div>
            <div className="flex items-center gap-3 my-2">
              <Contact />
              <span>{userPhone}</span>
            </div>
          </div>
          <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1 my-2">
              {skills.length > 0 ? (
                skills.map((item, index) => <Badge key={index}>{item}</Badge>)
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {resumeLink ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resumeLink}
                className="text-blue-500 w-full hover:underline cursor-pointer"
                aria-label="Download resume"
              >
                {user.profile.resumeOriginalName || "Resume not available"}
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </MainLayout>
    </div>
  );
};

export default Profile;
