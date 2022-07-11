import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = styled.header`
  min-width: 160px;
  width: 14vw;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColorLight};
  display: flex;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;
    padding: 24px 0px;
    cursor: default;
  }
  a {
    margin: 6px 0px;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

function NutrientSideBar() {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  // const { data } = useUser();
  return (
    <SideBar>
      <MenuContainer>
        <h1>영양소</h1>
        <Link to={{ search: "?sort=vitaA" }}>
          <span>비타민A</span>
        </Link>
        <Link to={{ search: "?sort=vitaB" }}>
          <span>비타민B</span>
        </Link>
        <Link to={{ search: "?sort=vitaC" }}>
          <span>비타민C</span>
        </Link>
        <Link to={{ search: "?sort=vitaD" }}>
          <span>비타민D</span>
        </Link>
        <Link to={{ search: "?sort=calsium" }}>
          <span>칼슘</span>
        </Link>
        <Link to={{ search: "?sort=magnesium" }}>
          <span>마그네슘</span>
        </Link>
        <Link to={{ search: "?sort=zinc" }}>
          <span>아연</span>
        </Link>
        <Link to={{ search: "?sort=probiotics" }}>
          <span>프로바이오틱스</span>
        </Link>
      </MenuContainer>
    </SideBar>
  );
}
export default NutrientSideBar;
