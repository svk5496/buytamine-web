import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { Base } from "../shared";

const Home2 = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bgColorStrong};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    height: 450px;
  }
  @media screen and (min-width: 1001px) {
    height: 500px;
  }
`;

const Home2HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    height: 100px;

    span {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 1001px) {
    height: 140px;

    span {
      font-size: 30px;
    }
  }
`;

const IconContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const IconBox = styled.div`
  flex-shrink: 1;
  flex-basis: 15%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 130px;
    span {
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 1001px) {
    height: 150px;
    width: 200px;
  }
  span {
    margin-top: 10px;
  }
`;

const Icon = styled.div`
  height: 100px;
  cursor: pointer;
  width: 100px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 95%;
  }
  @media screen and (max-width: 1000px) {
    height: 100px;
    span {
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 1001px) {
    height: 120px;
    width: 120px;
  }
  span {
    margin-top: 10px;
    cursor: default;
  }
`;

const SEE_TOP_HEALTH_GOALS = gql`
  query Query($offset: Int!) {
    seeTopHealthGoals(offset: $offset) {
      id
      name
      iconSmall
      iconMedium
      iconLarge
      bio
      rank
      createdAt
      updatedAt
    }
  }
`;

function HomePart2() {
  const { loading, data } = useQuery(SEE_TOP_HEALTH_GOALS, {
    variables: {
      offset: 0,
    },
  });
  console.log(data);

  return (
    <Base>
      {loading ? null : (
        <Home2>
          <Home2HeaderBox>
            <span>새로운 건강목표 탐색을 시작해보세요!</span>
          </Home2HeaderBox>
          <IconContainer>
            {data?.seeTopHealthGoals.map((healthGoal) => (
              <IconBox key={healthGoal.id}>
                <Icon>
                  <img src={healthGoal.iconMedium}></img>
                </Icon>
                <span>{healthGoal.name}</span>
              </IconBox>
            ))}
          </IconContainer>
        </Home2>
      )}
    </Base>
  );
}

export default HomePart2;
