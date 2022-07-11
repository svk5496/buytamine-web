import styled from "styled-components";
import CategoryHeader from "../../../components/shop/CategoryHeader";

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

function Category() {
  return (
    <>
      <Base>
        <CategoryHeader></CategoryHeader>
        <span>category</span>
      </Base>
    </>
  );
}
export default Category;
