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
          name="email"
          label="이메일"
          placeholder="이메일 주소 입력"
          required={true}
          variant="standard"
        />
        <Button label="중복확인" variant="outlined" />

        <Input
          name="password"
          label="비밀번호"
          type="password"
          placeholder="비멀번호 입력"
          required={true}
          variant="standard"
        />
        <Input
          name="passwordCheck"
          label="비밀번호 확인"
          type="password"
          placeholder="비멀번호 확인"
          required={true}
          variant="standard"
        />
        <Input
          name="username"
          label="이름"
          placeholder="이름 입력"
          required={true}
          variant="standard"
        />
        <Button label="회원가입" variant="outlined" />
      </Form>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
