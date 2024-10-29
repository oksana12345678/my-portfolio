import styled from "styled-components";

export const SwiperItem = styled.div`
  @media screen and (min-width: 320px) {
    background-color: var(--bg-button-color);
    border-radius: 16px;
    width: 288px;
    margin: 0 auto;
    padding: 4px;
    height: 600px;
    overflow: scroll;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--bg-button-color);
    border-radius: 16px;
    width: 704px;
    margin: 0 auto;
    padding: 8px;
  }
`;
