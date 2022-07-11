import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

import styled from "styled-components";

const DownloadBt = styled.span`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primary};
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
  const [uploadProduct, { loading }] = useMutation(CREATE_PRODUCT_MUTATION, {
    onCompleted,
  });

  const serviceName = "C003";
  const API_KEY = "858b8614444f4f29887b";

  const handleClick = () => {
    fetch(
      `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${serviceName}/json/1/30`
    )
      .then((response) => response.json())
      .then((json) => {
        const products = json.C003.row;
        setAmines(products);
      });
  };
  console.log(amines);

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
    <div>
      <DownloadBt onClick={handleClick}>data button</DownloadBt>
    </div>
  );
}
export default Data;
