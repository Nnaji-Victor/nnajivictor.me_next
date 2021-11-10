import media from "@/styles/media";
import { useAnimating } from "@/_hooks/animatingContext";
import {
  AnimatingContextInterface,
  MenuContextInterface,
} from "@/_hooks/hooks.types";
import { useMenu } from "@/_hooks/menuContext";
import { gsap } from "gsap";
import React from "react";
import styled from "styled-components";

const Menu = () => {
  const [open] = useMenu() as MenuContextInterface;
  const [, setAnimating] = useAnimating() as AnimatingContextInterface;

  const memoisedToggle = React.useCallback(
    (action) => {
      setAnimating(true);
      let loader = gsap.timeline({ yoyo: true });

      if (action === "open") {
        gsap.set(".menu", { autoAlpha: 1 });
      }

      if (action === "open") {
        gsap.set(".menu", { css: { zIndex: 20 } });
        loader.to(".menu-blob", {
          duration: 0.5,
          attr: { d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z" },
          ease: "power2.out",
          onComplete: () => setAnimating(false),
        });
      } else {
        loader.to(".menu-blob", {
          duration: 0.35,
          attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
          ease: "power2.in",
        });
        gsap.to(".menu", { css: { zIndex: -1 } });
        setAnimating(false);
      }
    },
    [setAnimating]
  );

  React.useEffect(() => {
    if (open) {
      memoisedToggle("open");
    } else {
      memoisedToggle("close");
    }
  }, [memoisedToggle, open]);
  return (
    <StyledMenu role="navigation" className="menu">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="menu--item"
      >
        <path
          className="menu-blob"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
      </svg>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 33.3333vw;
  position: absolute;
  right: 0;
  height: 100vh;
  visibility: hidden;
  ${media.desktop`width: 45vw`}
  ${media.tablet`width: 100vw; left: 0`}

  .menu--item {
    position: absolute;
    top: 0;
    transform: rotate(90deg);
    height: 100vh;
    fill: var(--tertiary-color);
  }
`;

const MemoMenu = React.memo(Menu);
export default MemoMenu;
