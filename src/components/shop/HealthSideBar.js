import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const SideBar = styled.header`
  width: 200px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColorLight};
  display: flex;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 18px;
    padding: 24px 0px;
    cursor: default;
  }
  span {
    margin: 6px 0px;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    margin: 0px 10px;
  }
  @media screen and (min-width: 1001px) {
    margin: 0px 60px;
  }
`;

function HealthSideBar() {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  // const { data } = useUser();
  return (
    <SideBar>
      <MenuContainer>
        <h1>건강목표</h1>
        <span>면역</span>
        <span>기억력</span>
        <span>기력</span>
        <span>눈건강</span>
        <span>잠</span>
        <span>스트레스</span>
        <span>심장</span>
        <span>관절</span>
        <span>피부</span>
        <span>머리카락</span>
        <span>손톱</span>
        <span>소화개선</span>
        <span>뼈</span>
      </MenuContainer>
    </SideBar>
  );
}
export default HealthSideBar;
