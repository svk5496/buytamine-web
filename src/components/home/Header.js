import { useReactiveVar } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBox, faBoxOpen, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../../apollo";
import useUser from "../../hooks/useUser";
import routes from "../../screens/routes";
import Avatar from "../Avatar";

const SHeader = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColorLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  margin: 0px 60px;
  display: flex;
  align-items: center;
  span {
    padding: 0px 10px;
    font-size: 14px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 1000px) {
    margin: 0px 10px;
  }
  @media screen and (min-width: 1001px) {
    margin: 0px 60px;
  }
`;

function Header() {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  // const { data } = useUser();

  return (
    <SHeader>
      <MenuContainer>
        <Link to={routes.healthgoal}>
          <span>건강목표</span>
        </Link>
        <Link to={routes.nutrient}>
          <span>영양소</span>
        </Link>
        <Link>
          <span>테스트</span>
        </Link>
      </MenuContainer>
      <MenuContainer>
        <Link to={routes.home}>
          <span>Logo</span>
        </Link>
      </MenuContainer>

      <MenuContainer>
        <span>로그인</span>
        <span>
          <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
        </span>
        <span>
          <FontAwesomeIcon icon={faBox} size="lg"></FontAwesomeIcon>
        </span>
      </MenuContainer>
    </SHeader>
  );
}
export default Header;
