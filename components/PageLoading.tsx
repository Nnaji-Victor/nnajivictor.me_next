import gsap from "gsap";
import React from "react";
import styled from "styled-components";

const PageLoading = () => {
  console.clear();
  React.useEffect(() => {
    const mask = ".js-mask";
    const slices = gsap.utils.toArray(".js-mask__slice");
    const tl = gsap.timeline();
    tl.set(mask, { autoAlpha: 1 })
      .fromTo(
        slices,
        {
          xPercent: 0,
        },
        {
          delay: 0.35,
          duration: 1.5,
          stagger: 0.095,
          xPercent: 100,
          ease: "expo.inOut",
        },
        "-=0.2"
      )
      .set(mask, {
        autoAlpha: 0,
      });
  }, []);

  return (
    <StyledPageLoader className="overall">
      <div className="mask js-mask">
        <div className="mask__slice js-mask__slice"></div>
        <div className="mask__slice js-mask__slice"></div>
        <div className="mask__slice js-mask__slice"></div>
      </div>
    </StyledPageLoader>
  );
};

const StyledPageLoader = styled.div`
  .mask {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
  }

  .mask__slice {
    -webkit-box-flex: 1;
    flex: 1;
    background-color: var(--tertiary-color);
  }
`;

export default PageLoading;
