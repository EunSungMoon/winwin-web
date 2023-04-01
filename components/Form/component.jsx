import { FormProvider } from "react-hook-form";
import styled from "styled-components";

const Component = ({ id, children, onSubmit, onError, form }) => {
  return (
    <FormProvider {...form}>

      <StyledForm onSubmit={form.handleSubmit(onSubmit, onError)} id={id}>
        {children}
      </StyledForm>

    </FormProvider>
  );
};

export default Component;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  
  div>div{
    margin-bottom:24px
  }
`;
