import Input from "../../components/Input";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../../components/Form";
import { useEffect } from "react";

const Page = ({ initialData }) => {
  const form = useForm({
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Form form={form}>
      <Input
        name="input"
        label="input"
        placeholder="hi"
        required={true}
        variant="standard"
      />
    </Form>
  );
};

const Text = styled.div`
  color: ${({ theme }) => theme.colors.red[100]};
`;
export default Page;
