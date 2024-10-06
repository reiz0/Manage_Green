import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";
import TaskCard from "./_taskCard.component";

export type taskType = {
  id: string;
  title: string;
  assignees: string[];
};

const Page = () => {
  const todo = [
    {
      id: "asdfa",
      title: "endpoint",
      assignees: ["dog", "cat", "monkey"],
    },
    {
      id: "asdfa",
      title: "clerk",
      assignees: ["dog", "cat", "monkey"],
    },
  ];
  const inProgress = [
    {
      id: "asdfa",
      title: "user story",
      assignees: ["dog", "cat", "monkey"],
    },
    {
      id: "asdfa",
      title: "front ui",
      assignees: ["dog", "cat", "monkey"],
    },
  ];
  const done = [
    {
      id: "asdfa",
      title: "set up",
      assignees: ["dog", "cat", "monkey"],
    },
    {
      id: "asdfa",
      title: "design",
      assignees: ["dog", "cat", "monkey"],
    },
  ];
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
            <FaShareAlt />
            &ensp;Share
          </Button>
        </div>

        <div>
          <TaskCard status="Todo" tasks={todo} />
          <TaskCard status="In Progress" tasks={inProgress} />
          <TaskCard status="Done" tasks={done} />
        </div>
      </div>
    </div>
  );
};

export default Page;
