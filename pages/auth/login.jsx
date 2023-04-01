import Form from "../../components/Form";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import styled from "styled-components";
import { useRouter } from "next/router";

const Page = () => {
  const form = useForm();
  const router = useRouter();

  return (
    <Wrapper>
      <Form form={form}>
        <Input
          name="username"
          label="아이디"
          placeholder="hi"
          required={true}
          variant="standard"
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          placeholder="hi"
          required={true}
          variant="standard"
        />
        <Button label="로그인" variant="outlined" />
        <Text onClick={() => router.push("auth/find")}>
          아이디 / 비밀번호 찾기
        </Text>
        <Text onClick={() => router.push("/auth/join")}>
          혹시, 윈윈이 처음이신가요? 회원가입 하기
        </Text>
      </Form>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Text = styled.div`
  text-decoration: underline;
  cursor: default;
  text-align: center;
`;
