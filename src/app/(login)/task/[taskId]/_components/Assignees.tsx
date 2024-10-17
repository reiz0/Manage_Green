import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { groupInfoType } from "@/types/group";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {
  group: groupInfoType;
};

export const Assignees = ({ group }: Props) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Assignees</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex">
          {group.members.map((member, i) => (
            <div key={i} className="m-1">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="font-bold text-2xl">
                  {member[1]}
                </AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
        <Button>Add new assignees</Button>
      </CardContent>
    </>
  );
};
