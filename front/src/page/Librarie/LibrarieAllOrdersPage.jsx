import React from "react";
import LibrarieAllOrders from "../../components/Library/LibrarieAllOrders";
import DashboardHeader from "../../components/Library/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Library/Layout/DashboardSideBar";

const LibrarieAllOrdersPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px] ">
          <DashboardSideBar active={2} />
        </div>
        <LibrarieAllOrders />
        <div className="w-full justify-center flex"></div>
      </div>{" "}
    </div>
  );
};

export default LibrarieAllOrdersPage;
