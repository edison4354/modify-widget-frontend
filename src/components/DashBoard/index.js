import React, { useEffect } from "react";
import SearchIcon from "../../images/SearchIcon.svg";
import NotifcationIcon from "../../images/NotificationIcon.svg";
import Avatar from "../../images/Avatar.png";
import WeatherLogo from "../../images/WeatherLogo.svg";
import SpotifyLogo from "../../images/SpotifyLogo.svg";

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
  WidgetCellContainer,
  WidgetCell,
  WidgetHead,
  WidgetTitle,
  WidgetDate,
  WidgetImage,
  WidgetType,
  AddNewWidget,
  AddNewButton
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
            <ProfileImage src={Avatar} alt="Avatar Icon" />
          </HeadRight>
        </DashboardHead>
        <DashboardMain>
          <WidgetCellContainer>
            <WidgetCell>
              <WidgetHead>
                <WidgetTitle>Daily Work Music</WidgetTitle>
                <WidgetDate>Created: 10 days ago</WidgetDate>
              </WidgetHead>
              <WidgetImage src={SpotifyLogo} alt="Widget Image" />
              <WidgetType>Spotify Music Widget</WidgetType>
            </WidgetCell>
            <WidgetCell>
              <WidgetHead>
                <WidgetTitle>Oakland Weather</WidgetTitle>
                <WidgetDate>Created: 5 days ago</WidgetDate>
              </WidgetHead>
              <WidgetImage src={WeatherLogo} alt="Widget Image" />
              <WidgetType>Weather Widget</WidgetType>
            </WidgetCell>
            <WidgetCell>
              <WidgetHead>
                <WidgetTitle>Daily Work Music</WidgetTitle>
                <WidgetDate>Created: 4 days ago</WidgetDate>
              </WidgetHead>
              <WidgetImage src={SpotifyLogo} alt="Widget Image" />
              <WidgetType>Spotify Music Widget</WidgetType>
            </WidgetCell>
            <WidgetCell>
              <WidgetHead>
                <WidgetTitle>Daly City Weather</WidgetTitle>
                <WidgetDate>Created: 2 days ago</WidgetDate>
              </WidgetHead>
              <WidgetImage src={WeatherLogo} alt="Widget Image" />
              <WidgetType>Weather Widget</WidgetType>
            </WidgetCell>
            <AddNewWidget>
              <AddNewButton to="/dashboard/new-widget">+ Create New Widget</AddNewButton>
            </AddNewWidget>
          </WidgetCellContainer>
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default DashBoard;
