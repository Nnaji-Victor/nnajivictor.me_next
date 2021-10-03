import Layout from "@/components/Layout";
import theme from "@/styles/theme";
import type { NextPage } from "next";
import styled from "styled-components";
import _config from "_config";

const Home: NextPage = () => {
  return (
    <Layout>
      <StyledHome>hello {_config.name}. The journey begins</StyledHome>
    </Layout>
  );
};

const StyledHome = styled.section`
  font-size: 10rem;
  font-weight: 400;
  /* font-family: ${theme.fonts.wotfard}; */
`;

export default Home;
