import styled, { css, keyframes } from 'styled-components';

const bubble = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const CeilWrap = styled.div`
  width: ${p => `calc(100% / ${p.quantityRows} - 5px)`};
  height: ${p => `calc(100% / ${p.quantityRows} - 5px)`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  position: relative;
  &:hover {
    border-color: blue;
  }
  ${p =>
    p.isFullImage &&
    css`
      &:last-child {
        animation: ${bubble} 0.7s linear;
        div {
          transition: opacity 0.4s;
        }
      }
    `}
`;

export const CeilImg = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  background-image: ${p => `url(${p.bgImg})`};
  opacity: ${p => (p.isVisible ? 1 : 0)};
`;
