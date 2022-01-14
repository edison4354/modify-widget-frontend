import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.div`
  background: #eef0f6;
  width: 230px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  font-size: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  overflow: scroll;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
`;

export const SideLogo = styled(LinkR)`
  cursor: pointer;
  text-decoration: none;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  margin: 0 10px;
  width: 140px;
`;

export const SideIcon = styled.img``;

export const SideLinks = styled(LinkR)`
  color: #777e90;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SideItem = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 5px 5px;
  align-items: center;
  border-radius: 15px;

  &:hover {
    background: #E3E3E3;
  }

  &:hover ${SideLinks} {
    font-weight: 700;
  }
`;
