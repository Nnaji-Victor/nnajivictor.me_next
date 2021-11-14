import Layout from "@/components/Layout";
import Featured from "@/sections/Featured";
import Hero from "@/sections/Hero";
import React from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { client } from "lib/apollo";
import featuredQuery from "lib/featuredQuery";
import { GetStaticProps, NextPage } from "next";
import { FeaturedInterface } from "@/types/featuredTypes";


interface Props {
  featured: FeaturedInterface[]
}
const Home: NextPage<Props> = ({ featured }) => {
  
  React.useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  return (
    <Layout>
      <Hero />
      <Featured featured={featured} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query({
    query: featuredQuery,
  });

  return {
    props: {
      featured: result.data.caseStudies.edges,
    },
  };
};

export default Home;
