import React from "react";


export const Main = ({ children }:{children:React.ReactNode}) => {
  return <main className="w-full p-4 mt-12 flex">{children}</main>;
};
