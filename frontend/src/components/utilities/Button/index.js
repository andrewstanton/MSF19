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
  font-size: 1.5rem;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    border-radius: 20px;
  }
`

export const ButtonBlue = styled(Button)`
  background-color: ${Color.blue};
  color: ${Color.white};
`

export const ButtonOrange = styled(Button)`
  background-color: ${Color.orange};
  color: ${Color.white};
`
