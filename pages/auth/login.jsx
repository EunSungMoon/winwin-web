import Form from "../../components/Form";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from  '../../components/Button'
const Page = () => {
  const form = useForm();

  return (
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
      <Button label="로그인" variant="outlined"  />
    </Form>
  );
};

export default Page;
