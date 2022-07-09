import { Link } from "react-router-dom";
import styled from "styled-components";
import { WhiteBox } from "../shared";

const SBottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    margin-left: 5px;
  }
`;

function AuthBottomBox({ cta, link, linkText }) {
  return (
    <SBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
}

export default AuthBottomBox;
