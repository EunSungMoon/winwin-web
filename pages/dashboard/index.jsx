import Input from "../../components/Input";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../../components/Form";
import { useEffect } from "react";
import { findStores } from "../../hook/useStore/fetch";

export async function getServerSideProps(ctx) {
  const stores = await findStores();

  return {
    props: {
      initialData: {
        stores: stores.data.items,
      },
    },
  };
}

const Page = ({ initialData }) => {
  const { stores } = initialData;
  console.log("🚀 ~ file: index.jsx:22 ~ Page ~ initialData:", stores);

  return (
    <Wrapper>
      {stores.map((st) => (
        <div key={st.storeName}>{st.storeName}</div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Card=styled.div`
  
`

export default Page;
