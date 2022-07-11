import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const SHeader = styled.header`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColorLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  h1 {
    font-size: 8px;
  }
  span {
    padding: 0px 10px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    margin: 0px 10px;
  }
  @media screen and (min-width: 1001px) {
    margin: 0px 60px;
  }
`;

const SearchBox = styled.div`
  width: 300px;
  height: 90%;
  background: white;
  margin-right: 50px;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 90%;
`;

function CategoryHeader() {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  // const { data } = useUser();
  return (
    <SHeader>
      <MenuContainer>
        <h1>카테고리:</h1>
        <span>건강목표</span>
        <span>영양소</span>
        <span>베스트</span>
      </MenuContainer>
      <SearchBox>
        <StyledInput></StyledInput>
        <BiSearchAlt size="20"></BiSearchAlt>
      </SearchBox>
    </SHeader>
  );
}
export default CategoryHeader;
