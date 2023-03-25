import Input from "../components/Input";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../components/Form";
import { useEffect } from "react";

const Page = ({ initialData }) => {
  const form = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    // <Form form={form} onSubmit={onSubmit}>
    //   <Input name="input" />
    // </Form>
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input name="input" />
      </form>
    </FormProvider>
  );
};

const Text = styled.div`
  color: ${({ theme }) => theme.colors.red[100]};
`;
export default Page;
