import React from "react";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      
      <div className="py-10">{children}</div>
    </>
  );
};

export default layout;
