import Form from "../../components/Form";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import useAuth from "../../hook/useAuth/hook";
import { ajvResolver } from "@hookform/resolvers/ajv";
import Image from "next/image";

const Page = () => {
  const form = useForm({
    resolver: ajvResolver({
      type: "object",
      properties: {
        password: {
          type: "string",
          minLength: 8,
          errorMessage: {
            minLength: "비밀번호는 8자리 이상입니다.",
            type: "비밀번호를 입력해주세요.",
          },
        },
        passwordCheck: {
          type: "string",
          minLength: 8,
          errorMessage: {
            minLength: "비밀번호는 8자리 이상입니다.",
            type: "비밀번호를 입력해주세요.",
          },
        },
        username: {
          type: "string",
          minLength: 1,
          errorMessage: {
            minLength: "아이디를 입력해주세요.",
            type: "아이디를 입력해주세요.",
          },
        },
      },
    }),
  });

  const checkForm = useForm({
    resolver: ajvResolver({
      type: "object",
      properties: {
        email: {
          type: "string",
          minLength: 1,
          errorMessage: {
            minLength: "이메일을 입력해주세요.",
            type: "이메일을 입력해주세요.",
          },
        },
      },
    }),
  });

  const router = useRouter();
  const { join, checkUsername } = useAuth();

  const handleJoin = async (data) => {
    const username = checkForm.getValues("username");
    try {
      if (data.password !== data.passwordCheck) {
        console.log("비밀번호가 일치하지 않습니다");
      } else {
        const res = await join({ username: username, ...data });
      }

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckEmail = async (data) => {
    try {
      const res = await checkUsername(data);
      console.log(data);
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
      <Form form={checkForm}>
        <InputWrapper>
          <Input
            name="email"
            label="이메일"
            placeholder="이메일 주소 입력"
            variant="standard"
          />
          <UniqueButton>
            <Button
              label={<UniqueButtonLabel>중복확인</UniqueButtonLabel>}
              variant="contained"
              onClick={checkForm.handleSubmit(handleCheckEmail)}
              appearance={"default"}
            />
          </UniqueButton>
        </InputWrapper>
      </Form>
      <Form form={form}>
        <Input
          name="password"
          label="비밀번호"
          type="password"
          placeholder="비멀번호 입력"
          variant="standard"
        />
        <Input
          name="passwordCheck"
          label="비밀번호 확인"
          type="password"
          placeholder="비멀번호 확인"
          variant="standard"
        />
        <Input
          name="username"
          label="이름"
          placeholder="이름 입력"
          variant="standard"
        />
        <ButtonWrapper>
          <Button
            label={<ButtonLabel>확인</ButtonLabel>}
            variant="contained"
            onClick={form.handleSubmit(handleJoin)}
            appearance={"primary"}
            radius={"50px"}
            height={"53px"}
          />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding-top: 102px;
`;
const ImageFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  img {
    :nth-child(odd) {
      margin-right: 11px;
    }
  }
`;
const ButtonLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.neutral[0]};
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

const UniqueButtonLabel = styled.div`
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const UniqueButton = styled.div`
  width: 124px;
  height: 28px;
  margin-left: 8px;
`;
