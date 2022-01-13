import React from "react";
import SearchIcon from "../../images/SearchIcon.svg";
import NotifcationIcon from "../../images/NotificationIcon.svg";
import {
  DashboardContainer,
  SearchbarText,
  DashboardHead,
  DashboardMain,
  HeadLeft,
  HeadRight,
  SearchBar,
  Title,
  SubTitle,
  Icon,
  Notifcation,
  VerticalLine,
  ProfileImage,
} from "./DashboardElements";

const DashBoard = () => {
  return (
    <>
      <DashboardContainer>
        <DashboardHead>
          <HeadLeft>
            <Title>Dashboard</Title>
            <SubTitle>Hi David, welcome back!</SubTitle>
          </HeadLeft>
          <HeadRight>
            <SearchBar>
              <Icon src={SearchIcon} alt="Search Icon" />
              <SearchbarText>Search Widget</SearchbarText>
            </SearchBar>
            <Notifcation>
              <Icon src={NotifcationIcon} alt="Bell Icon" />
            </Notifcation>
            <VerticalLine />
            <ProfileImage />
          </HeadRight>
        </DashboardHead>
      </DashboardContainer>
    </>
  );
};

export default DashBoard;
