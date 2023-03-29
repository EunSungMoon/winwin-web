import { FormProvider } from "react-hook-form";

const Component = ({ id, children, onSubmit, onError, form }) => {

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)} id={id}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Component;
