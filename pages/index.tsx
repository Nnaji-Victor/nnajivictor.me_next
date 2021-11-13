import CustomLink from "@/components/CustomLink";
import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import theme from "@/styles/theme";
import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import _config from "_config";

const Home: NextPage = () => {
  return (
    <Layout>
      <StyledHome>
        <Hero />
        <CustomLink href="/junk">
          GO TO JUNK
        </CustomLink>
      </StyledHome>
    </Layout>
  );
};

const StyledHome = styled.section`
  
`;

export default Home;
