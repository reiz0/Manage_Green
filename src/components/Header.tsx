import { Button } from "@/components/ui/button";
import { baseText } from "@/style/baseClass";

export const Header = () => {
  return (
    <header className="bg-slate-50 bg-opacity-65 h-20 flex items-center justify-between">
      <h1 className={`font-bold text-4xl mx-5 ${baseText}`}>Task Green</h1>
      
      <Button className="mx-5 bg-rose-500 hover:bg-rose-700">Sign Out</Button>
    </header>
  );
};
