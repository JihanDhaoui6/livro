import React from "react";
import DashboardHeader from "../../components/Library/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Library/Layout/DashboardSideBar";
import CreateBook  from "../../components/Library/CreateBook"
const LibrarieCreatePost = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px]:w-[330px] ">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
            <CreateBook />
        </div>
      </div>
    </div>
  );
};

export default LibrarieCreatePost;
