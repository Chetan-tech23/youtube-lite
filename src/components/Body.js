import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex">
      <div className="sticky top-[6rem] h-full hidden md:block">
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
