import React, { ReactNode } from "react";

export const Tooltip = ({ 
  message, children 
} : {
  message: string, children: ReactNode 
}) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute bottom-0 flex-auto w-60 lg:w-72 flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-4 text-white whitespace-no-wrap bg-slate-800 shadow-lg rounded-md">{message}</span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-800"></div>
      </div>
    </div>
  )
}
