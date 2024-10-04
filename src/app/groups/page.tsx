import { Button } from "@/components/ui/button";

import { FaPlus } from "react-icons/fa6";
import { Group } from "./_group.component";
import { baseText } from "@/style/baseClass";

export type groupInfoType = {
  title: string;
  members: string[];
};

export default function Page() {
  const groups: groupInfoType[] = [
    {
      title: "Work Project",
      members: ["dog", "cat", "monkey"],
    },
    {
      title: "Personal Tasks",
      members: ["dog"],
    },
    {
      title: "Shopping List",
      members: ["dog", "cat"],
    },
  ];
  return (
    <div>
      <h1 className={`text-4xl font-bold ${baseText}`}>My Task Groups</h1>
      <div>
        <Button
          className=" bg-slate-50 hover:bg-green-100 w-96 h-36 flex flex-col" asChild
        >
          <div className={`text-2xl ${baseText}`}>
            <FaPlus />
            <p>Create New Group</p>
          </div>
        </Button>
        {groups.map((group, index) => {
          console.log(index);
          return(
            <Group key={index} index={index} groupInfo={group} />
          )
        })}
      </div>
    </div>
  );
}
