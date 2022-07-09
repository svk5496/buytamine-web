import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

import styled from "styled-components";

const DownloadBt = styled.span`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primary};
`;

// const CREATE_PRODUCT_MUTATION = gql`
//   mutation UploadProduct(
//     $name: String!
//     $productListReportNo: String
//     $shape: String
//     $prmsDate: String
//     $lastUpdateDate: String
//     $productShapeConditionName: String
//     $licenseNo: String
//     $brand: String
//     $dispos: String
//     $expireDate: String
//     $howKeep: String
//     $howTake: String
//     $rawMaterial: String
//     $primaryFunction: String
//     $mainStandard: String
//     $intakeAttention: String
//   ) {
//     uploadProduct(
//       name: $name
//       productListReportNo: $productListReportNo
//       shape: $shape
//       prmsDate: $prmsDate
//       lastUpdateDate: $lastUpdateDate
//       productShapeConditionName: $productShapeConditionName
//       licenseNo: $licenseNo
//       brand: $brand
//       dispos: $dispos
//       expireDate: $expireDate
//       howKeep: $howKeep
//       howTake: $howTake
//       rawMaterial: $rawMaterial
//       primaryFunction: $primaryFunction
//       mainStandard: $mainStandard
//       intakeAttention: $intakeAttention
//     ) {
//       ok
//       error
//     }
//   }
// `;

function NutrientUpdate() {
  // const onCompleted = (data) => {
  //   const {
  //     uploadProduct: { ok, error },
  //   } = data;
  //   if (!ok) {
  //     return;
  //   } else {
  //     console.log("등록완료");
  //   }
  // };

  // const [amines, setAmines] = useState([]);
  // const [uploadProduct, { loading }] = useMutation(CREATE_PRODUCT_MUTATION, {
  //   onCompleted,
  // });

  const serviceName = "I-0050";
  const API_KEY = "858b8614444f4f29887b";

  const rowName = "I-0050";

  const handleClick = () => {
    fetch(
      `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${serviceName}/json/1/270`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // nutrients.map((nutrient) => {
        //   console.log(nutrient.RAWMTRL_NM);
        // });
      });
  };
  return (
    <div>
      <DownloadBt onClick={handleClick}>data button</DownloadBt>
    </div>
  );
}
export default NutrientUpdate;
