import Input from "../components/Input";
import styled from "styled-components";

const Page = ({ initialData }) => {
  // return <Input />;
  return <Text>ghi</Text>;
};

const Text = styled.div`
  color: ${({ theme }) => theme.colors.red[100]};
`;
export default Page;
