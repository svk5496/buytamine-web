import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

import styled from "styled-components";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DownloadBox = styled.div`
  width: 20%;
  height: 80%;
  background-color: ${(props) => props.theme.bgColorStrong};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 20px;
    margin: 20px 0px;
  }
`;

const DownloadBt = styled.span`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primary};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  padding: 0px 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 2px;
  padding: 7px 20px;
  background-color: white;
  border: 0.5px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: ${(props) => props.theme.primary};
  }
  -webkit-appearance: none;
`;

const CREATE_PRODUCT_MUTATION = gql`
  mutation UploadProduct(
    $name: String!
    $productListReportNo: String
    $shape: String
    $prmsDate: String
    $lastUpdateDate: String
    $productShapeConditionName: String
    $licenseNo: String
    $brand: String
    $dispos: String
    $expireDate: String
    $howKeep: String
    $howTake: String
    $rawMaterial: String
    $primaryFunction: String
    $mainStandard: String
    $intakeAttention: String
  ) {
    uploadProduct(
      name: $name
      productListReportNo: $productListReportNo
      shape: $shape
      prmsDate: $prmsDate
      lastUpdateDate: $lastUpdateDate
      productShapeConditionName: $productShapeConditionName
      licenseNo: $licenseNo
      brand: $brand
      dispos: $dispos
      expireDate: $expireDate
      howKeep: $howKeep
      howTake: $howTake
      rawMaterial: $rawMaterial
      primaryFunction: $primaryFunction
      mainStandard: $mainStandard
      intakeAttention: $intakeAttention
    ) {
      ok
      error
    }
  }
`;

function Data() {
  const onCompleted = (data) => {
    const {
      uploadProduct: { ok, error },
    } = data;
    if (!ok) {
      return;
    } else {
      console.log("등록완료");
    }
  };

  const [amines, setAmines] = useState([]);
  const [startPoint, setStartPoint] = useState("0");
  const [endPoint, setEndPoint] = useState("1");
  const [uploadProduct, { loading }] = useMutation(CREATE_PRODUCT_MUTATION, {
    onCompleted,
  });

  const serviceName = "C003";
  const API_KEY = "858b8614444f4f29887b";

  const handleStartPoint = (e) => {
    setStartPoint(e.target.value);
  };
  const handleEndPoint = (e) => {
    setEndPoint(e.target.value);
  };

  const handleClick = () => {
    fetch(
      `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${serviceName}/json/${startPoint}/${endPoint}`
    )
      .then((response) => response.json())
      .then((json) => {
        const products = json.C003.row;
        setAmines(products);
      });
  };
  console.log(amines);

  amines.map((product) => {
    const rawMaterials = product.RAWMTRL_NM.match(
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w)α.%( -]+/g
    );
    console.log(rawMaterials);

    //console.log(product.PRIMARY_FNCLTY);
  });

  // products.map((product) => {
  //   console.log(product.RAWMTRL_NM);
  //   uploadProduct({
  //     variables: {
  //       brand: product.BSSH_NM,
  //       howKeep: product.CSTDY_MTHD,
  //       dispos: product.DISPOS,
  //       intakeAttention: product.IFTKN_ATNT_MATR_CN,
  //       lastUpdateDate: product.LAST_UPDT_DTM,
  //       licenseNo: product.LCNS_NO,
  //       howTake: product.NTK_MTHD,
  //       expireDate: product.POG_DAYCNT,
  //       name: product.PRDLST_NM,
  //       productListReportNo: product.PRDLST_REPORT_NO,
  //       productShapeConditionName: product.PRDT_SHAP_CD_NM,
  //       primaryFunction: product.PRIMARY_FNCLTY,
  //       prmsDate: product.PRMS_DT,
  //       rawMaterial: product.RAWMTRL_NM,
  //       shape: product.SHAP,
  //       mainStandard: product.STDR_STND,
  //     },
  //   });
  // });

  return (
    <Base>
      <DownloadBox>
        <h1>건강기능 식품 API 다운로드</h1>
        <InputContainer>
          <span>시작점</span>
          <SearchInput onBlur={handleStartPoint}></SearchInput>
        </InputContainer>
        <InputContainer>
          <span>마지막</span>
          <SearchInput onBlur={handleEndPoint}></SearchInput>
        </InputContainer>

        <DownloadBt onClick={handleClick}>다운로드</DownloadBt>
      </DownloadBox>
      <DownloadBox></DownloadBox>
      <DownloadBox></DownloadBox>
      <DownloadBox></DownloadBox>
    </Base>
  );
}
export default Data;
