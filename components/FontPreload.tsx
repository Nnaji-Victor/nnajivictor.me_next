import React from "react";

const FontPreload = () => {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/wotfard/wotfard-regular-webfont.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/wotfard/wotfard-medium-webfont.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/wotfard/wotfard-semibold-webfont.woff2"
        as="font"
        crossOrigin=""
      />
    </>
  );
};

export default FontPreload;
