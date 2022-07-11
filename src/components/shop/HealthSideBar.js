import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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

function HealthSideBar() {
  return (
    <SideBar>
      <MenuContainer>
        <h1>건강목표</h1>
        <Link to={{ search: "?sort=immune" }}>
          <span>면역</span>
        </Link>
        <Link to={{ search: "?sort=memory" }}>
          <span>기억력</span>
        </Link>
        <Link to={{ search: "?sort=energy" }}>
          <span>기력</span>
        </Link>
        <Link to={{ search: "?sort=eye" }}>
          <span>눈건강</span>
        </Link>
        <Link to={{ search: "?sort=sleep" }}>
          <span>잠</span>
        </Link>
        <Link to={{ search: "?sort=stress" }}>
          <span>스트레스</span>
        </Link>
        <Link to={{ search: "?sort=heart" }}>
          <span>심장</span>
        </Link>
        <Link to={{ search: "?sort=joint" }}>
          <span>관절</span>
        </Link>
        <Link to={{ search: "?sort=skin" }}>
          <span>피부</span>
        </Link>
        <Link to={{ search: "?sort=hair" }}>
          <span>머리카락</span>
        </Link>
        <Link to={{ search: "?sort=nail" }}>
          <span>손톱</span>
        </Link>
        <Link to={{ search: "?sort=digest" }}>
          <span>소화개선</span>
        </Link>
        <Link to={{ search: "?sort=bone" }}>
          <span>뼈</span>
        </Link>
      </MenuContainer>
    </SideBar>
  );
}
export default HealthSideBar;
