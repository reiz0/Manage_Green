import { baseText } from "@/app/style/baseClass";
import { setBgColor } from "@/app/style/setStyle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { taskType } from "./page";

type Props = {
  status: string;
  tasks: taskType[];
};
const TaskCard = ({ status, tasks }: Props) => {
  return (
    <Card className={`${baseText} my-5`}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <CardHeader>
            <AccordionTrigger>
              <CardTitle className="text-lg">{`${status} (${tasks.length})`}</CardTitle>
            </AccordionTrigger>
          </CardHeader>
          <AccordionContent className="bg-emerald-50 rounded-b-xl">
            <CardContent className="pb-0 pt-4">
              {status === "Todo" && (
                <Link href={`/task`}>
                  <Button
                    asChild
                    className={`w-full my-2 bg-slate-50 hover:bg-lime-200 ${baseText}`}
                  >
                    <div className="">
                      <FaPlus />
                      &ensp;
                      <p>Create New Task</p>
                    </div>
                  </Button>
                </Link>
              )}
              {tasks.map((task, index) => {
                return (
                  <Link href={`/task/${task.id}`} key={index}>
                    <Button
                      asChild
                      className={`w-full ${setBgColor(index)} ${baseText} my-2`}
                    >
                      <div className="justify-between">
                        <h1>{task.title}</h1>
                        <div>{task.assignees.length}</div>
                      </div>
                    </Button>
                  </Link>
                );
              })}
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default TaskCard;
