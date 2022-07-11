import { gql, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { darkModeVar, isLoggedInvar, logUserIn } from "../../apollo";
import AuthButton from "../../components/auth/AuthButton";
import AuthBottomBox from "../../components/auth/AuthBottomBox";
import AuthFormBox from "../../components/auth/AuthFormBox";
import AuthFormError from "../../components/auth/AuthFormError";
import AuthInput from "../../components/auth/AuthInput";
import AuthLayout from "../../components/auth/AuthLayout";
import Seperator from "../../components/auth/Seperator";
import PageTitle from "../../components/pageTitle";
import routes from "../routes";

const FacebookLogin = styled.div`
  color: ${(props) => props.theme.primaryDark};
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Notification = styled.div`
  color: green;
`;

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const location = useLocation(); // 사인업에서 가져온 메세지, 아이디, 비밀번호등의 정보
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    },
  });
  //로그인 구현
  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    // 밑에 있는 Input.name과 변수명이 같아야함.
    const { username, password } = getValues();
    login({
      variables: { username, password },
    });
  };

  const onSubmitInvalid = (data) => {
    console.log(data, "invalid");
  };
  return (
    <AuthLayout>
      <PageTitle title="Login"></PageTitle>
      <AuthFormBox>
        {/* <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div> */}
        <Notification>{location?.state?.message}</Notification>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <AuthInput
            ref={register({
              required: "이메일을 입력해주세요",
              minLength: { value: 5, message: "5자 이상 입력해주세요" },
              //validate: (currentValue) => currentValue.includes(".com"),
            })}
            onChange={() => clearErrors("result")}
            name="username"
            type="text"
            placeholder="이메일"
            hasError={Boolean(errors?.username?.message)}
          />
          <AuthFormError message={errors?.username?.message}></AuthFormError>
          <AuthInput
            ref={register({ required: "비밀번호를 입력해주세요" })}
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={() => clearErrors("result")}
            hasError={Boolean(errors?.username?.message)}
          />
          <AuthFormError message={errors?.password?.message}></AuthFormError>
          <AuthButton
            type="submit"
            value="Log in"
            disabled={!formState.isValid || loading}
          />
          <AuthFormError message={errors?.result?.message}></AuthFormError>
        </form>
        <Seperator />
        <FacebookLogin>
          <span>카카오로 로그인하기</span>
        </FacebookLogin>
      </AuthFormBox>
      <AuthBottomBox
        cta="Don't have an account"
        linkText="Sign up"
        link={routes.signUp}
      ></AuthBottomBox>
    </AuthLayout>
  );
}
export default Login;
