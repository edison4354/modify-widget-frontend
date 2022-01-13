import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/DashBoard";
import { DashContainer } from "../AppElements";

const DashBoardPage = () => {
  return (
    <>
      <DashContainer>
        <Sidebar />
        <Dashboard />
      </DashContainer>
    </>
  );
};

export default DashBoardPage;
