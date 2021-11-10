import Link from "next/link";
import { useAnimating } from "@/_hooks/animatingContext";
import {
  AnimatingContextInterface,
  MenuContextInterface,
} from "@/_hooks/hooks.types";
import { useMenu } from "@/_hooks/menuContext";
import { gsap } from "gsap";
import React from "react";
import styled from "styled-components";
import media from "@/styles/media";

const Menu = () => {
  const [open] = useMenu() as MenuContextInterface;
  const [, setAnimating] = useAnimating() as AnimatingContextInterface;

  const memoisedToggle = React.useCallback(
    (action) => {
      const overlayPath = document.querySelector(".overlay__path");
      const menuWrap = document.querySelector(".menu__wrap");
      const menuItems = gsap.utils.toArray(".menu__item");

      if (action === "open") {
        gsap.set(".menu", { autoAlpha: 1 });
        gsap.set(".menu", { css: { zIndex: 10 } });
        setAnimating(true);
        gsap
          .timeline({
            onComplete: () => setAnimating(false),
          })
          .set(overlayPath, {
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
          })
          .to(
            overlayPath,
            {
              duration: 0.8,
              ease: "power4.in",
              attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
            },
            0
          )
          .to(overlayPath, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
            onComplete: () => {
              menuWrap?.classList.add("menu__wrap--open");
            },
          })
          .set(menuItems, {
            opacity: 0,
          })
          .set(overlayPath, {
            attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
          })
          .to(overlayPath, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
          })
          .addLabel("revealText")
          .to(
            overlayPath,
            {
              duration: 0.8,
              ease: "power4",
              attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
            },
            "revealText"
          )
          .to(
            menuItems,
            {
              duration: 1.1,
              ease: "power4",
              startAt: { y: 150 },
              y: 0,
              opacity: 1,
              stagger: 0.05,
            },
            "revealText"
          );
      } else {
        setAnimating(true);
        gsap
          .timeline({
            onComplete: () => setAnimating(false),
          })
          .set(overlayPath, {
            attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
          })
          .to(
            overlayPath,
            {
              duration: 0.8,
              ease: "power4.in",
              attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
            },
            0
          )
          .to(overlayPath, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
            onComplete: () => {
              menuWrap?.classList.remove("menu__wrap--open");
            },
          })
          // now reveal
          .set(overlayPath, {
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
          })
          .to(overlayPath, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
          })
          .to(overlayPath, {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
          })
          .to(
            menuItems,
            {
              duration: 0.8,
              ease: "power2.in",
              y: 100,
              opacity: 0,
              stagger: -0.05,
            },
            0
          )
          .set(".menu", { autoAlpha: 0 })
          .set(".menu", { css: { zIndex: -1 } });
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
      <div className="menu__wrap">
        <nav className="main-menu">
          <Link href="/junk">
            <a className="menu__item">
              <span className="menu__item-text">About</span>
            </a>
          </Link>
          <a className="menu__item">
            <span className="menu__item-text">Blog</span>
          </a>
          <a className="menu__item">
            <span className="menu__item-text">Case Studies</span>
          </a>
          <a className="menu__item">
            <span className="menu__item-text">Playground</span>
          </a>
          <a className="menu__item">
            <span className="menu__item-text">Series</span>
          </a>
        </nav>
      </div>
      <svg
        className="overlay"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="overlay__path"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: grid;
  visibility: hidden;
  overflow: hidden;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
  opacity: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  .overlay {
    position: relative;
    grid-area: 1/1/2/2;
    fill: var(--tertiary-color);
  }

  .menu__wrap {
    opacity: 0;
    &.menu__wrap--open {
      opacity: 1;
      height: 100vh;
      background-color: var(--bg);
      position: absolute;
      top: 0;
      width: 100%;
    }
    .main-menu {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;

      .menu__item {
        font-size: 8.5rem;
        color: var(--primary-color);
        cursor: pointer;
        line-height: 1.2;
        font-weight: 600;
        text-align: right;
        position: relative;
        will-change: opacity, transform;
        z-index: 10;
        text-decoration: none;
        ${media.phablet`font-size: 4.5rem; margin-bottom: 1.5rem`};
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 2.5rem;
          height: 1.5rem;
          background: var(--primary-color);
          transform: scale3d(0, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.3s;
        }
        &:hover {
          &::before {
            transform: scale3d(1, 1, 1);
          }
        }
      }

      .menu__item-text {
        display: block;
        transition: transform 0.3s;
        opacity: 1;
      }
      
      .menu__item:hover .menu__item-text {
        transform: translate3d(0.5em, 0, 0);
      }
    }
  }
`;

const MemoMenu = React.memo(Menu);
export default MemoMenu;
