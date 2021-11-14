import React from "react";

export const SplitWord = (text: string, style: string, key?: any) => {
  return (
    <p
      className={style}
      style={{ display: "block", textAlign: "start", position: "relative" }}
      key={key}
    >
      {text}
    </p>
  );
};

export const SplitChar = (text: string, style: string) => {
  return (
    <>
      {text.split("").map((char: string, index: number) => (
        <span
          className={style}
          aria-hidden="true"
          key={index}
          style={{ display: "inline-block", position: "relative" }}
        >
          {char === " " ? (char = "\u00A0") : char}
        </span>
      ))}
    </>
  );
};
