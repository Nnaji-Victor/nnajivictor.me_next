import Head from "next/head";
import styled from "styled-components";
import FontPreload from "./FontPreload";
import Header from "./Header";
import { LoadingContextInterface, MenuContextInterface } from "@/_hooks/hooks.types";
import Loading from "./Loading";
import { useDarkMode } from "next-dark-mode";
import { Fragment } from "react";
import { useMenu, useLoader } from "_hooks/";

const Layout: React.FC = ({ children }) => {
  const [isLoading] = useLoader() as LoadingContextInterface;

  const [open, setOpen] = useMenu() as MenuContextInterface;

  const { darkModeActive } = useDarkMode();

  return (
    <Fragment>
      <Head>
        <FontPreload />
      </Head>
      <SkipToContent href="#content">Skip to Content</SkipToContent>
      <div className={`layout ${darkModeActive ? "dark" : "light"}`} id={open ? "stoic" : "fluid"}>
        <Header />
        <StyledLayout>{children}</StyledLayout>
        <Loading />
      </div>
      {/* {isLoading ? (<>div</>) : (
        <>
        </>
      )} */}
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
  min-height: 100vh;
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
