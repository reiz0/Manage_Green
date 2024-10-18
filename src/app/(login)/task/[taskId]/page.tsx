import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaArrowLeft, FaRegTrashAlt } from "react-icons/fa";

import { groupInfoType } from "@/types/group";
import { Detail } from "./_components/Detail";
import { Status } from "./_components/Status";
import { Assignees } from "./_components/Assignees";
import { StartDate } from "./_components/StartDate";
import { EndDate } from "./_components/EndDate";

const page = () => {
  const group: groupInfoType = {
    id: "1",
    title: "Work Project",
    members: ["dog", "cat", "monkey"],
  };

  return (
    <div className="grid place-items-center">
      <div>
        <div className="sm:flex justify-between">
          <Link href={`/group`}>
            <Button className="bg-emerald-700 hover:bg-emerald-600">
              <FaArrowLeft />
              &ensp;Back
            </Button>
          </Link>
          <div className="px-0 py-5 sm:px-10">
            <Input
              type="text"
              placeholder="Untitled"
              className="border-0 border-emerald-700 border-b-2 rounded-none w-[300px] text-3xl focus-visible:ring-0"
            />
          </div>
          <Button className="bg-emerald-700 hover:bg-emerald-600">
            <FaRegTrashAlt />
            &ensp;Delete
          </Button>
        </div>
        <Card>
          <Detail />
          <Status />
          <Assignees group={group} />
          <StartDate />
          <EndDate />
        </Card>
      </div>
    </div>
  );
};

export default page;
