import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { baseText } from "@/app/style/baseClass";
import { groupInfoType } from "./page";

type Props = {
  index: number;
  groupInfo: groupInfoType;
};

export const Group = ({ index, groupInfo }: Props) => {
  const setBgColor = (num: number) => {
    if (num % 4 === 1) return "bg-purple-200 hover:bg-purple-300";
    else if (num % 4 === 2) return "bg-yellow-200 hover:bg-yellow-300";
    else if (num % 4 === 3) return "bg-blue-200 hover:bg-blue-300";
    else return "bg-pink-200 hover:bg-pink-300";
  };

  return (
    <Button className={`w-96 h-36 ${setBgColor(index)} flex flex-col`} asChild>
      <div className={baseText}>
        <h3 className="text-2xl">{groupInfo.title}</h3>
        <h3>{groupInfo.members.length} members</h3>
        <div className="flex">
          {groupInfo.members.map((member, i) => (
            <Avatar key={i}>
              <AvatarImage src="" />
              <AvatarFallback>{member}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </Button>
  );
};
