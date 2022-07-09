import { gql, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { darkModeVar, isLoggedInvar } from "../apollo";
import AuthBottomBox from "../components/auth/AuthBottomBox";
import AuthButton from "../components/auth/AuthButton";
import AuthFormBox from "../components/auth/AuthFormBox";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";
import Seperator from "../components/auth/Seperator";
import PageTitle from "../components/pageTitle";
import routes from "./routes";

const Subtitle = styled.h3`
  font-weight: 600;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $korName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      korName: $korName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home, {
      message: "계정이 생성되었습니다, 로그인해주세요!",
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, errors, formState, getValues } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign Up"></PageTitle>
      <AuthFormBox>
        <Subtitle>회원가입</Subtitle>
        {/* <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div> */}
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <AuthInput
            ref={register({ required: "이름을 입력해주세요" })}
            name="korName"
            type="text"
            placeholder="이름"
          />
          <AuthInput
            ref={register({ required: "아이디을 입력해주세요" })}
            name="username"
            type="text"
            placeholder="아이디"
          />
          <AuthInput
            ref={register({ required: "이메일을 입력해주세요" })}
            name="email"
            type="text"
            placeholder="이메일"
          />
          <AuthInput
            ref={register({ required: "비밀번호를 입력해주세요" })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <AuthButton
            type="submit"
            value="Sign Up"
            disabled={!formState.isValid || loading}
          />
        </form>
        <Seperator />
      </AuthFormBox>
      <AuthBottomBox
        cta="Have an account"
        linkText="Log in"
        link={routes.home}
      ></AuthBottomBox>
    </AuthLayout>
  );
}
export default SignUp;
