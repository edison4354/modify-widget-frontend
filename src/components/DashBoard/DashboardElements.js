import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const DashboardContainer = styled.div`
  display: flex;
  background: #f6f7fc;
  width: 100%;
  flex-direction: column;
`;

export const DashboardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 170px;
  align-items: flex-start;
`;

export const HeadLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-left: 50px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
`;

export const SubTitle = styled.p`
  margin-top: 5px;
  margin-left: 2px;
  color: #6e6e6e;
`;

export const HeadRight = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 100px 8px 10px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
`;

export const SearchbarText = styled.p`
  padding-left: 12px;
  margin: 0;
  font-size: 14px;
  color: #8e8e8e;
`;

export const Notifcation = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px 0 8px;
  background: white;
  border-radius: 30px;
  padding: 8px;
`;

export const Icon = styled.img``;
export const VerticalLine = styled.div`
  border: 1px solid #dddddd;
  height: 30px;
`;
export const ProfileImage = styled.img`
  height: 40px;
  margin: 0 30px 0 24px;
`;

export const DashboardMain = styled.div``;

export const WidgetCellContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  margin-left: 40px;
  margin-right: 20px;
  grid-gap: 50px 15px;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WidgetCell = styled.div`
  display: flex;
  background-color: #ffffff;
  text-align: center;
  padding: 18px;
  border-radius: 15px;
  max-width: 350px;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
`;

export const WidgetHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WidgetTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
`;

export const WidgetDate = styled.p`
  margin: 0;
  padding: 5px 1px;
  color: #A6A6A6;
  font-size: 14px;
`;

export const WidgetImage = styled.img`
  height: 70px;
  padding: 30px 0 10px 0;
`;

export const WidgetType = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const AddNewWidget = styled.div`
  border-radius: 15px;
  border: 2px dashed gray;
  height: 212px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AddNewButton = styled(LinkR)`
 background: gray;
 padding: 12px;
 border-radius: 8px;
 color: white;
 font-weight: 500;
 text-decoration: none;
`