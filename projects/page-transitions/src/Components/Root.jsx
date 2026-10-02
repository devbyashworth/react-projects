import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="h-[calc(100%-80px)] max-w-4xl mx-auto">
      <Outlet />
    </div>
  );
};

export default Root;
