import styled from 'styled-components';

export const GameBlock = styled.div`
  margin-top: 15px;
  font-size: 16px;
`;

export const GameBoardWrap = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
  margin-right: -5px;
  width: 500px;
  height: 500px;
`;

export const TipBlock = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${p => `url(${p.bgImg})`};
`;

export const GameTitle = styled.div`
  color: green;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  margin-bottom: 25px;
`;

export const GameBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid green;
    border-radius: 5px;
    color: green;
    font-weight: 400;
    transition: all 0.3s;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
