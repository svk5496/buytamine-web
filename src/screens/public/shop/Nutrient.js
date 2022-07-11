import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NutrientSideBar from "../../../components/shop/NutrientSideBar";

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function Nutrient() {
  return (
    <>
      <Base>
        <ContentBox>
          <NutrientSideBar></NutrientSideBar>
          <span>category</span>
        </ContentBox>
      </Base>
    </>
  );
}
export default Nutrient;
