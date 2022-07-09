import { Link } from "react-router-dom";
import styled from "styled-components";
import { WhiteBox } from "../shared";

const Home1 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin: 0px auto;
`;

const Home1img = styled.div`
  background-image: url(https://buytamine.s3.ap-northeast-2.amazonaws.com/img/home/bg_home1.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 56vw;
  max-height: 560px;
  border-radius: 0px 0px 20px 20px;
`;

const Home1TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const UpTextBox = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    span {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 1001px) {
    span {
      font-size: 30px;
    }
  }
`;

const DownTextBox = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    span {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 1001px) {
    margin-top: 16px;
    span {
      font-size: 20px;
    }
  }
`;

const QuizButton = styled.span`
  font-weight: 700px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
    padding: 14px 28px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1001px) {
    font-size: 20px;
    padding: 18px 40px;
    border-radius: 28px;
  }
`;

function HomePart1({ link }) {
  return (
    <Home1>
      <Home1img>
        <Home1TextBox>
          <UpTextBox>
            <span>몸을 아는게,</span>
            <span>건강식품 정보를 아는것보다</span>
            <span>중요합니다</span>
          </UpTextBox>
          <DownTextBox>
            <span>3분만에 몸에 딱 맞는</span>
            <span>비타민, 단백질을 찾아보세요!</span>
          </DownTextBox>
          <Link to="#"> </Link>
          <QuizButton>테스트 시작</QuizButton>
        </Home1TextBox>
      </Home1img>
    </Home1>
  );
}

export default HomePart1;
