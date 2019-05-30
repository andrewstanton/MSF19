import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { applyStyleModifiers } from "styled-components-modifiers"

import { Color } from "../../utilities/Color"
import { Type } from "../../utilities/Type"

const MODIFIER_CONFIG = {
  blue: () => css`
    background-color: ${Color.blue};
    color: ${Color.white};
  `,
  borderBlue: () => css`
    background-color: transparent;
    color: ${Color.blue} !important;
    border: 1px solid ${Color.blue};
    &:hover {
      background-color: ${Color.blue};
      color: ${Color.white} !important;
    }
  `,
  borderWhite: () => css`
    background-color: transparent;
    color: ${Color.white} !important;
    border: 1px solid ${Color.white};
  `,
  orange: () => css`
    background-color: ${Color.orange};
    color: ${Color.white} !important;
  `,
  borderOrange: () => css`
    background-color: transparent;
    color: ${Color.orange} !important;
    border: 1px solid ${Color.orange};
    &:hover {
      background-color: ${Color.orange};
      color: ${Color.white} !important;
    }
  `,

  white: () => css`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid ${Color.white};
  `,

  colorBlue: () => css`
    color: ${Color.blue} !important;
    border: 1px solid ${Color.blue};
  `,

  colorOrange: () => css`
    color: ${Color.orange} !important;
    border: 1px solid ${Color.orange};
  `,

  large: () => css`
    font-size: 2rem;
    padding: 2rem 2.5rem;
  `,

  hoverOrange: () => css`
    &:hover {
      background-color: ${Color.orange};
      color: ${Color.white} !important;
    }
  `,
  hoverBlue: () => css`
    &:hover {
      background-color: ${Color.blue};
      color: ${Color.white} !important;
    }
  `,
}

const buttonCSS = css`
  border: 0;
  border-radius: 3px;
  padding: 1.25rem 1.75rem;
  margin: 0;
  text-decoration: none;
  font-family: ${Type.header};
  font-size: 1.25rem;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: ${({ marginTop }) => marginTop || "0"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};
  margin-left: ${({ marginLeft }) => marginLeft || "0"};
  margin-right: ${({ marginRight }) => marginRight || "0"};

  &:hover {
    transform: scale(1.3);
    border-radius: 20px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`

export const Button = styled.button`
  ${buttonCSS}
`

export const ButtonLink = styled(Link)`
  ${buttonCSS}
  text-decoration: none !important;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ButtonHTMLLink = styled.a`
  ${buttonCSS}
  text-decoration: none !important;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`
