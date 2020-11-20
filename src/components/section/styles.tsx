import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.8rem;
    margin: 0.8rem 0;
    line-height: 2.8rem;

    a {
      color: #fff;
    }
  }

  & + div {
    border-top: 0.5px solid rgba(255, 255, 255, 0.4);
    margin-top: 2rem;
    padding-top: 2rem;
  }
`
