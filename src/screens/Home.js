import styled from "styled-components";
import { logUserOut } from "../apollo";
import Avatar from "../components/Avatar";
import HomePart1 from "../components/home/homePart1";
import HomePart2 from "../components/home/homePart2";
import HomePart3 from "../components/home/homePart3";
import { Divider } from "../components/shared";

//home4 dependency
import { gql, useQuery } from "@apollo/client";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;

  margin: 0px auto;
`;

const Home4 = styled.div`
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

const Home4HeaderBox = styled.div`
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

const ProductCardBox = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductCard = styled.div`
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

const ProductImage = styled.div`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    width: 70%;
    height: 70%;
    opacity: 95%;
  }
`;

const ProductTextBox = styled.div`
  width: 100%;
  border-radius: 0px 0px 20px 20px;
  background-color: ${(props) => props.theme.secondary};
  height: 40%;
  display: flex;
`;

const ProductTextDetailBox = styled.div`
  width: 62%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  justify-content: space-between;
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

function Home() {
  const { loading, data } = useQuery(SEE_TOP_HEALTH_GOALS, {
    variables: {
      offset: 0,
    },
  });
  console.log(data);
  return (
    <div>
      <Container>
        <HomePart1></HomePart1>
        <Divider></Divider>
        <HomePart2></HomePart2>
        <Divider></Divider>
        <HomePart3></HomePart3>
        <Divider></Divider>
        <Home4>
          <Home4HeaderBox>
            <span>찾으시는 영양소가 있나요?</span>
          </Home4HeaderBox>
          <ProductCardBox>
            <ProductCard>
              <ProductCard>
                <ProductImage>
                  <img></img>
                </ProductImage>
                <ProductTextBox>
                  <ProductTextDetailBox></ProductTextDetailBox>
                </ProductTextBox>
              </ProductCard>
            </ProductCard>
          </ProductCardBox>
        </Home4>
      </Container>
    </div>
  );
}
export default Home;
