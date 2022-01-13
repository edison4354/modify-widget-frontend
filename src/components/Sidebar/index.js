import React from "react";
import MainLogo from "../../images/Logo.svg";
import AccountIcon from "../../images/AccountIcon.svg";
import DashboardIcon from "../../images/DashboardIcon.svg";
import ExploreIcon from "../../images/ExploreIcon.svg";
import HelpIcon from "../../images/HelpIcon.svg";
import LogoutIcon from "../../images/LogoutIcon.svg";
import SettingIcon from "../../images/SettingIcon.svg";

import {
  SidebarContainer,
  SidebarWrapper,
  SideLogo,
  SideMenu,
  SideItem,
  SideIcon,
  SideLinks,
} from "./SidebarElements";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SideLogo to="/">
            <img src={MainLogo} alt="Logo" />
          </SideLogo>
          <SideMenu>
            <SideItem>
              <SideIcon src={DashboardIcon} alt="Dashboard Icon" />
              <SideLinks to="/dashboard">Dashboard</SideLinks>
            </SideItem>
            <SideItem>
              <SideIcon src={AccountIcon} alt="Account Icon" />
              <SideLinks to="/account">Account</SideLinks>
            </SideItem>
            <SideItem>
              <SideIcon src={ExploreIcon} alt="Explore Icon" />
              <SideLinks to="/explore">Explore</SideLinks>
            </SideItem>
            <SideItem>
              <SideIcon src={HelpIcon} alt="Help Icon" />
              <SideLinks to="/help">Help</SideLinks>
            </SideItem>
            <SideItem>
              <SideIcon src={SettingIcon} alt="Setting Icon" />
              <SideLinks to="/settings">Settings</SideLinks>
            </SideItem>
            <SideItem>
              <SideIcon src={LogoutIcon} alt="Log Out Icon" />
              <SideLinks to="/logout">Log Out</SideLinks>
            </SideItem>
          </SideMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
