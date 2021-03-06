import Head from "next/head";
import styled from "styled-components";
import FontPreload from "./FontPreload";
import Header from "./Header";
import { MenuContextInterface } from "@/_hooks/hooks.types";
import { useDarkMode } from "next-dark-mode";
import React, { Fragment } from "react";
import { useMenu } from "_hooks/";
import MemoMenu from "./Menu";
import PageLoading from "./PageLoading";

const Layout: React.FC = ({ children }) => {
  const [open] = useMenu() as MenuContextInterface;

  const { darkModeActive } = useDarkMode();

  React.useEffect(() => {
    if (darkModeActive) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkModeActive]);

  return (
    <Fragment>
      <Head>
        <FontPreload />
      </Head>
      <SkipToContent href="#content">Skip to Content</SkipToContent>
      <div id={open ? "stoic" : "fluid"}>
        <Header />
        <MemoMenu />
        <StyledLayout>{children}</StyledLayout>
        <PageLoading />
      </div>
    </Fragment>
  );
};

const StyledLayout = styled.main`
  #stoic {
    overflow-y: hidden;
  }
  grid-template-columns: repeat(var(--cols), var(--gridSize));
  display: grid;
  grid-gap: 0px;
  /* min-height: 100vh; */

  & > * {
    grid-column: 2/-2;
  }
`;

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: var(--primary-color);
    background-color: var(--bg);
    border-radius: 0.3rem;
    padding: 18px 23px;
    font-size: 1.4rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;

export default Layout;
