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
        <Link to={{ search: "?sort=면역력" }}>
          <span>면역력</span>
        </Link>
        <Link to={{ search: "?sort=기억력" }}>
          <span>기억력</span>
        </Link>
        <Link to={{ search: "?sort=기력" }}>
          <span>기력</span>
        </Link>
        <Link to={{ search: "?sort=눈건강" }}>
          <span>눈건강</span>
        </Link>
        <Link to={{ search: "?sort=잠" }}>
          <span>잠</span>
        </Link>
        <Link to={{ search: "?sort=스트레스" }}>
          <span>스트레스</span>
        </Link>
        <Link to={{ search: "?sort=태아건강" }}>
          <span>심장</span>
        </Link>
        <Link to={{ search: "?sort=관절" }}>
          <span>관절</span>
        </Link>
        <Link to={{ search: "?sort=피부" }}>
          <span>피부</span>
        </Link>
        <Link to={{ search: "?sort=머리카락" }}>
          <span>머리카락</span>
        </Link>
        <Link to={{ search: "?sort=손톱" }}>
          <span>손톱</span>
        </Link>
        <Link to={{ search: "?sort=소화불량" }}>
          <span>소화개선</span>
        </Link>
        <Link to={{ search: "?sort=뼈" }}>
          <span>뼈</span>
        </Link>
      </MenuContainer>
    </SideBar>
  );
}
export default HealthSideBar;
