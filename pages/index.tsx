import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import theme from "@/styles/theme";
import type { NextPage } from "next";
import styled from "styled-components";
import _config from "_config";

const Home: NextPage = () => {
  return (
    <Layout>
      <StyledHome>
        <Hero />
      </StyledHome>
    </Layout>
  );
};

const StyledHome = styled.section`
  
`;

export default Home;
