import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";

const page = () => {
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
        <Card>
          <CardHeader>
            <div></div>
            <div>
              <div>
                <CardTitle>Status</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
