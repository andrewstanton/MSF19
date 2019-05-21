import styled from "styled-components"

import { Color } from "../Color"
import { Type } from "../Type"

export const Button = styled.button`
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
  margin-top: ${props => props.marginTop || "0"};
  margin-bottom: ${props => props.marginBottom || "0"};
  margin-left: ${props => props.marginLeft || "0"};
  margin-right: ${props => props.marginRight || "0"};

  &:hover {
    transform: scale(1.3);
    border-radius: 20px;
  }
`

export const ButtonBlue = styled(Button)`
  background-color: ${Color.blue};
  color: ${Color.white};
`

export const ButtonBorderBlue = styled(Button)`
  background-color: transparent;
  color: ${Color.blue};
  border: 1px solid ${Color.blue};
  &:hover {
    background-color: ${Color.blue};
    color: ${Color.white};
  }
`

export const ButtonOrange = styled(Button)`
  background-color: ${Color.orange};
  color: ${Color.white};
`

export const ButtonBorderOrange = styled(Button)`
  background-color: transparent;
  color: ${Color.orange};
  border: 1px solid ${Color.orange};
  &:hover {
    background-color: ${Color.orange};
    color: ${Color.white};
  }
`
