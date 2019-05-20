import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    flex-grow: 1;
    flex-basis: 0;
  }
`
