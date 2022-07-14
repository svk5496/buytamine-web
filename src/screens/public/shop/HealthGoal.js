import { gql, useQuery } from "@apollo/client";
import QueryString from "qs";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  @media screen and (max-width: 1000px) {
    padding-right: 0px;
  }
  @media screen and (min-width: 1001px) {
    padding-right: 50px;
  }
`;

const MainBannerBox = styled.div`
  width: 100%;
  height: 40%;
  background-color: lightcoral;
`;

const ProductBox = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ProductCard = styled.div`
  flex-basis: 240px;
  height: 400px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
  margin: 20px;
  :hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: ease-in-out 0.3s;
  }
  img {
    width: 100%;
    height: 40%;
    background-color: white;
  }
`;

const ProductTextBox = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px 20px;
  color: white;
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }
  span {
    margin-bottom: 10px;
  }
`;

const SEE_PRODUCTS_WITH_HEALTH_GOAL = gql`
  query seeProductsWithHG($sort: String, $lastId: Int) {
    seeProductsWithHG(sort: $sort, lastId: $lastId) {
      ok
      error
      products {
        id
        name
        price
        thumbnail
        coupangReviewCount
        primaryFunctions {
          primaryFunction
        }
      }
    }
  }
`;

function HealthGoal() {
  const location = useLocation();
  const sch = location.search;
  const params = new URLSearchParams(sch);
  const sort = params.get("sort");

  console.log(sort);

  const [lastId, setLastId] = useState(0);

  const { data } = useQuery(SEE_PRODUCTS_WITH_HEALTH_GOAL, {
    variables: {
      lastId,
      sort,
    },
  });

  console.log(data);

  return (
    <>
      <Base>
        <ContentBox>
          <HealthSideBar></HealthSideBar>
          <Content>
            <MainBannerBox></MainBannerBox>
            {data?.seeProductsWithHG.products ? (
              <ProductBox>
                {data?.seeProductsWithHG?.products.map((product) => (
                  <ProductCard key={product.id}>
                    <img src={product.thumbnail}></img>
                    <ProductTextBox>
                      <h1>{product.name}</h1>
                      <h2>{product.price}</h2>
                    </ProductTextBox>
                  </ProductCard>
                ))}
              </ProductBox>
            ) : null}
          </Content>
        </ContentBox>
      </Base>
    </>
  );
}
export default HealthGoal;
