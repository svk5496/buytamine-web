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

function NutrientSideBar() {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  // const { data } = useUser();
  return (
    <SideBar>
      <MenuContainer>
        <h1>영양소</h1>
        <span>비타민A</span>
        <span>비타민B</span>
        <span>비타민C</span>
        <span>비타민D</span>
        <span>칼슘</span>
        <span>철분</span>
        <span>마그네슘</span>
        <span>아연</span>
        <span>프로바이오틱스</span>
      </MenuContainer>
    </SideBar>
  );
}
export default NutrientSideBar;
