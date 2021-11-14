import media from '@/styles/media';
import { SplitWord } from '@/_utils/split-text';
import React from 'react'
import styled from 'styled-components';

interface HeadingProps {
    content: string;
    children?: React.ReactChild;
    className?: string | undefined;
}
const Heading: React.FC<HeadingProps> = ({content, children, className}) => {
    const text = SplitWord(children as string, 'intro__line');
    return (
        <StyledHeading content={content} className={`header__container ${className}`}>
            <span className="heading__inner">{text}</span>
        </StyledHeading>
    )
}
const StyledHeading = styled.h3`
  margin: 10rem 0;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  font-size: 6rem;
  font-weight: 800;
  ${media.tablet`font-size: 3rem;`};
  ${media.phone`margin: 6rem 0`};
  perspective: 300px;

  .heading__inner{
    display: block;
    overflow: hidden;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 10rem;
    background-color: var(--primary-color);
    position: relative;
    top: -5px;
    margin-left: 20px;
    ${media.desktop`width: 30%`};
    ${media.phone`margin-left: 1rem;`};
  }
  &:before {
    content: "${(props: HeadingProps) => props.content}";
    position: absolute;
    opacity: 0.06;
    font-size: 15rem;
    font-weight: 800;
    font-family: inherit;
    top: -6.5rem;
    left: 0;
    width: 100%;
    text-transform: uppercase;
    overflow: hidden;
    ${media.tablet`font-size: 12rem;`}
    }
`

export default Heading
