import React from "react";
import { baseText } from "../style/baseClass";
import { Button } from "@/components/ui/button";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-slate-50 bg-opacity-65 h-20 flex items-center justify-between">
        <h1 className={`font-bold text-4xl mx-5 ${baseText}`}>Task Green</h1>
        <Button className="mx-5 bg-rose-500 hover:bg-rose-700">Sign Out</Button>
      </header>
      <div className="py-10">{children}</div>
    </>
  );
};

export default layout;
