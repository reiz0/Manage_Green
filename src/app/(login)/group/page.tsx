import { Button } from "@/components/ui/button";

import { baseText } from "@/style/baseClass";
import { groupInfoType } from "@/types/group";
import { FaPlus } from "react-icons/fa6";
import { Group } from "./_group.component";

export default function Page() {
  const groups: groupInfoType[] = [
    {
      id: "1",
      title: "Work Project",
      members: ["dog", "cat", "monkey"],
    },
    {
      id: "2",
      title: "Personal Tasks",
      members: ["dog"],
    },
    {
      id: "3",
      title: "Shopping List",
      members: ["dog", "cat"],
    },
    {
      id: "4",
      title: "gaming",
      members: ["dog", "lion"],
    },
  ];
  return (
    <div className="text-center">
      <h1 className={`text-4xl font-bold ${baseText} mb-10 pt-5`}>
        My Task Groups
      </h1>
      <div className="grid place-items-center">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <Button
            className="bg-slate-50 hover:bg-lime-200 w-96 h-36 flex flex-col text-2xl"
            asChild
          >
            <div className={`${baseText}`}>
              <FaPlus />
              <p>Create New Group</p>
            </div>
          </Button>
          {groups.map((group, index) => (
            <Group key={index} index={index} groupInfo={group} />
          ))}
        </div>
      </div>
    </div>
  );
}
