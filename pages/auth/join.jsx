import Form from "../../components/Form";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import useAuth from "../../hook/useAuth/hook";

const Page = () => {
  const form = useForm();
  const router = useRouter();
  const { join, checkUsername } = useAuth();

  const handleJoin = async (data) => {
    try {
      const res = await join(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckEmail = async (data) => {
    try {
      const res = await checkUsername(data);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

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
        <Button label="중복확인" variant="outlined" onClick={form.handleSubmit(handleCheckEmail)} />

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
        <Button
          label="회원가입"
          variant="outlined"
          onClick={form.handleSubmit(handleJoin)}
        />
      </Form>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
