import Form from "../../components/Form";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import useAuth, { Fetch as AuthFeth } from "../../hook/useAuth";
import { ajvResolver } from "@hookform/resolvers/ajv";
import Image from "next/image";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

const Page = () => {
  const form = useForm({
    resolver: ajvResolver({
      type: "object",
      properties: {
        username: {
          type: "string",
          minLength: 1,
          errorMessage: {
            minLength: "아이디를 입력해주세요.",
            type: "아이디를 입력해주세요.",
          },
        },
        password: {
          type: "string",
          minLength: 1,
          errorMessage: {
            minLength: "비밀번호를 입력해주세요.",
            type: "비밀번호를 입력해주세요.",
          },
        },
      },
    }),
  });
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <ImageFlex>
        <Image src={"/images/logo.svg"} width="50" height="39" alt="logo" />
        <Image
          src={"/images/logo_text.svg"}
          width="118"
          height="21"
          alt="logo"
        />
      </ImageFlex>

      <Form form={form}>
        <Input
          name="username"
          label="아이디 또는 이메일"
          placeholder="아이디 또는 이메일"
          variant="standard"
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          variant="standard"
        />
        <ButtonWrapper>
          <Button
            label={<ButtonLabel>로그인</ButtonLabel>}
            variant="contained"
            onClick={form.handleSubmit(handleLogin)}
            appearance={"primary"}
            radius={"50px"}
            height={"53px"}
          />
        </ButtonWrapper>
      </Form>

      <Info>
        <Text onClick={() => router.push("auth/find")}>
          아이디 / 비밀번호 찾기
        </Text>
        <Text>
          혹시, 윈윈이 처음이신가요?{" "}
          <Span onClick={() => router.push("/auth/join")}>회원가입 하기</Span>
        </Text>
      </Info>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding-top: 216px;
`;

const Text = styled.div`
  text-decoration: underline;
  cursor: default;
  text-align: center;
  margin-bottom: 7px;
  color: ${({ theme }) => theme.colors.neutral[300]};

  font-size: 14px;
  line-height: 20px;
  font-weight: 350;
`;

const ImageFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  img {
    :nth-child(odd) {
      margin-right: 11px;
    }
  }
`;

const ButtonLabel = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.neutral[0]};
`;
const Info = styled.div`
  margin-top: 24px;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;
