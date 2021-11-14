import {
  MenuContextInterface,
} from "@/_hooks/hooks.types";
import { useMenu } from "@/_hooks/menuContext";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  className?: string;
  activeClassName?: string;
}

const CustomLink: React.FC<Props> = ({
  href,
  children,
  className,
  activeClassName,
  ...props
}) => {
  const [, setOpen] = useMenu() as MenuContextInterface;

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Link href={href}>
      <a className={className} {...props} onClick={handleLinkClick}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
