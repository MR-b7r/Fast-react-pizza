import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-200/30 backdrop-blur-sm">
      <div className="loader "></div>
    </div>
  );
};

export default Loader;
