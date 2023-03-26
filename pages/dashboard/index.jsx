import Input from "../components/Input";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../components/Form";
import { useEffect } from "react";

const Page = ({ initialData }) => {
  const form = useForm({
    defaultValues: {
      input: "",
    },
  });
  console.log(form.watch());

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...form}>
      <Form form={form}>
        <Input name="input" />
      </Form>
    </FormProvider>
  );
};

const Text = styled.div`
  color: ${({ theme }) => theme.colors.red[100]};
`;
export default Page;
