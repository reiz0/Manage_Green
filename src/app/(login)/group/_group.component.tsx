import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { baseText } from "@/style/baseClass";
import { setBgColor } from "@/style/setStyle";
import { groupInfoType } from "@/types/group";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
  index: number;
  groupInfo: groupInfoType;
};

export const Group = ({ index, groupInfo }: Props) => {
  return (
    <Link href={`/group/${groupInfo.id}`}>
      <Button
        className={`w-96 h-36 ${setBgColor(index)} flex flex-col`}
        asChild
      >
        <div className={`${baseText} relative`}>
          <button className="text-xl hover:text-rose-800 absolute right-7 top-7">
            <FaRegTrashAlt />
          </button>

          <h3 className="text-2xl">{groupInfo.title}</h3>
          <h3>{groupInfo.members.length} members</h3>
          <div className="flex">
            {groupInfo.members.map((member, i) => (
              <div key={i} className="m-1">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="font-bold text-2xl">
                    {member[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        </div>
      </Button>
    </Link>
  );
};
