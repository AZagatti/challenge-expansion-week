import styled from "styled-components"

export const Container = styled.div`
  svg {
    width: 100%;
    height: 100%;
    margin-top: 1.4rem;
  }
  a {
    color: rgba(255, 255, 255, 0.8);
  }
  margin-bottom: 1.4rem;
  
  & + p {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    padding-top: 1.4rem;
  }
`
