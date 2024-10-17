import { Button } from "@/components/ui/button";
import { baseText } from "@/style/baseClass";
import Link from "next/link";

export const Header = () => {
  const userId = "abcde";

  return (
    <header className="bg-slate-50 bg-opacity-65 h-20 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={userId ? "/group" : "/"}>
          <h1 className={`font-bold text-4xl mx-5 ${baseText}`}>Task Green</h1>
        </Link>

        {/* desktop nav */}
        <div className=" xl:flex items-center gap-8">
          {/* <Nav /> */}
          <nav>
            <ul className="flex gap-10">
              {userId && (
                <li>
                  <Link href="/group" className={`${baseText} text-lg`}>
                    My Groups
                  </Link>
                </li>
              )}

              {userId ? (
                <li>
                  <div>
                    {/* <UserButton /> */}
                  </div>
                </li>
              ) : (
                <li id="">
                  <Button className="mx-5 bg-rose-500 hover:bg-rose-700">Sign in</Button>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {/* mobile nav */}
        {/* <div className="xl:hidden"><MobileNav /></div> */}
      </div>
    </header>
  );
};
