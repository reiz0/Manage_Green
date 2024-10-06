import { baseText } from "@/app/style/baseClass";
import { setBgColor } from "@/app/style/setStyle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
              {tasks.map((task, index) => {
                return (
                  <Button
                    key={index}
                    asChild
                    className={`w-full ${setBgColor(index)} ${baseText} my-2`}
                  >
                    <div className="justify-between">
                      <h1>{task.title}</h1>
                      <div>{task.assignees.length}</div>
                    </div>
                  </Button>
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
