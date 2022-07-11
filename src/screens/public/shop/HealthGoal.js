import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryHeader from "../../../components/shop/CategoryHeader";
import HealthSideBar from "../../../components/shop/HealthSideBar";

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function HealthGoal() {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Base>
        <ContentBox>
          <HealthSideBar></HealthSideBar>
          <span>category</span>
        </ContentBox>
      </Base>
    </>
  );
}
export default HealthGoal;
