import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Base } from "../shared";

const Home3 = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bgColorStrong2};
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  padding: 0px 30px;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    height: 500px;
  }
  @media screen and (min-width: 1001px) {
    height: 550px;
  }
`;

const Home3HeaderBox = styled.div`
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
  width: 100%;
  /* display: flex;
  flex-wrap: nowrap; */
`;

const ProductCard = styled.div`
  width: 96%;
  border-radius: 20px;
  background-color: tomato;
  @media screen and (max-width: 1000px) {
    height: 260px;

    h1 {
      font-size: 12px;
      color: white;
    }
    h2 {
      font-size: 10px;
      color: white;
    }
    span {
      font-size: 8px;
    }
  }
  @media screen and (min-width: 1001px) {
    height: 300px;

    h1 {
      font-size: 16px;
      color: white;
    }
    h2 {
      font-size: 14px;
      color: white;
    }

    span {
      font-size: 12px;
    }
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

const ProductTextDetailBoxLeft = styled.div`
  width: 62%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  justify-content: space-between;
`;
const ProductTextDetailBoxRight = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 14px;
  justify-content: space-between;
`;

const PrimaryFunctionText = styled.span`
  color: ${(props) => props.theme.bgColor};
`;

const Commment = styled.span`
  margin-left: 6px;
`;

const BuyBt = styled.div`
  padding: 10px 0px;
  background-color: white;
  border-radius: 20px;
  opacity: 80%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  span {
    font-weight: 700;
    color: ${(props) => props.theme.secondary};
  }
`;

const TailBox = styled.div`
  width: 100%;
  padding-top: 50px;
  @media screen and (max-width: 1000px) {
    height: 140px;

    span {
      font-size: 12px;
    }
  }
  @media screen and (min-width: 1001px) {
    height: 140px;

    span {
      font-size: 14px;
    }
  }
`;
const SeeProductBt = styled.div`
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 60px;
  span {
    font-size: 16px;
  }
`;

const RoundArrow = styled.div`
  cursor: pointer;

  border-radius: 25px;
  background-color: ${(props) => props.theme.fontDarkColor};
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    height: 140px;
    height: 40px;
    width: 40px;
  }
  @media screen and (min-width: 1001px) {
    height: 140px;
    height: 50px;
    width: 50px;
  }
`;

const SEE_BEST_PRODUCT_QUERY = gql`
  query SeeProducts($page: Int!) {
    seeProducts(page: $page) {
      id
      name
      price
      thumbnail
      totalReview
      primaryFunctions {
        primaryFunction
      }
    }
  }
`;

function HomePart3() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    arrows: true,
    autopaly: true,
    autoplaySpeed: 3000,
  };

  const { loading, data } = useQuery(SEE_BEST_PRODUCT_QUERY, {
    variables: {
      page: 1,
    },
  });
  console.log(data);

  return (
    <Base>
      {loading ? null : (
        <Home3>
          <Home3HeaderBox>
            <span>고객들이 가장 좋아하는 상품</span>
          </Home3HeaderBox>
          <ProductCardBox>
            <Slider {...settings}>
              {data?.seeProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard>
                    <ProductImage>
                      <img src={product.thumbnail}></img>
                    </ProductImage>
                    <ProductTextBox>
                      <ProductTextDetailBoxLeft>
                        <h1>{product.name}</h1>
                        <PrimaryFunctionText>
                          {product.primaryFunctions[0]?.primaryFunction}
                        </PrimaryFunctionText>
                        <PrimaryFunctionText>
                          {product.primaryFunctions[1]?.primaryFunction}
                        </PrimaryFunctionText>
                        <div>
                          <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>

                          <Commment>{product.totalReview}</Commment>
                        </div>
                      </ProductTextDetailBoxLeft>
                      <ProductTextDetailBoxRight>
                        <h2>₩{product.price}</h2>
                        <BuyBt>
                          <span>구매하기</span>
                        </BuyBt>
                      </ProductTextDetailBoxRight>
                    </ProductTextBox>
                  </ProductCard>
                </div>
              ))}
            </Slider>
          </ProductCardBox>
          <TailBox>
            <span>
              * 집계는 해당 상품에 구매하기 버튼 클릭 수를 기준으로 집계되고,
              실시간으로 순위가 변경될 수 있습니다.
            </span>
            <SeeProductBt>
              <span>모든 상품 보기 </span>
              <RoundArrow>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="2x"
                  color="white"
                ></FontAwesomeIcon>
              </RoundArrow>
            </SeeProductBt>
          </TailBox>
        </Home3>
      )}
    </Base>
  );
}

export default HomePart3;
