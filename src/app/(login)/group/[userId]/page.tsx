import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";

const Page = () => {
  return (
    <div className="grid place-items-center">
      <div className="sm:flex justify-between">
        <Button className="bg-emerald-700">
          <FaArrowLeft />
          &ensp;Back
        </Button>
        <div className="px-0 py-5 sm:px-10">
          <Input type="text" placeholder="Untitled" className="border-0 border-emerald-700 border-b-2 rounded-none w-[300px] text-3xl" />
        </div>
        <Button className="bg-emerald-700">
          <FaShareAlt />
          &ensp;Share
        </Button>
      </div>

      
    </div>
  );
};

export default Page;
