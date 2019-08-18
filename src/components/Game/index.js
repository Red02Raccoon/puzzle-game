import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';

import { Ceil } from './components';
import HOC from './HOC';

import { GameBlock, GameBoardWrap, GameTitle, GameBoard, GameHeader, TipBlock } from './styles.js';

const propTypes = {
  images: PropTypes.object.isRequired,
  mainImage: PropTypes.string.isRequired,
  quantityRows: PropTypes.number.isRequired,
  empty: PropTypes.string.isRequired,

  currentState: PropTypes.arrayOf(PropTypes.string),
  steps: PropTypes.number,
  isWin: PropTypes.bool,

  isFullImage: PropTypes.bool,
  isTip: PropTypes.bool,
};

const keysCodes = [37, 38, 39, 40]; // 'ArrowLeft, ArrowUp, ArrowRight, ArrowDown'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomData = data => {
  const randomData = [];

  const keys = Object.keys(data);
  const length = keys.length;

  while (randomData.length < length) {
    const randomInt = getRandomInt(0, length);
    const element = keys[randomInt];

    if (!randomData.includes(element)) {
      randomData.push(element);
    }
  }

  return randomData;
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.props.setCurrentState({
      currentState: getRandomData(this.props.images),
      isWin: false,
      steps: 0,
    });
  }

  handleStartBtnClick = () => {
    this.props.startNewGame({
      currentState: getRandomData(this.props.images),
      steps: 0,
      isWin: false,
      isFullImage: false,
      isTip: false,
    });
  };

  handleTipBtnClick = () => {
    this.props.toggleTip({
      isTip: !this.props.isTip,
    });
  };

  commonHandler = data => {
    const isClick = typeof data === 'string';
    const mainKey = isClick ? data : data.keyCode;

    const { quantityRows, winState, empty, currentState } = this.props;
    const state = chunk(currentState, quantityRows);

    const emptyCoords = state.reduce((acc, el, row) => {
      const col_empty = el.indexOf(empty);

      if (col_empty !== -1) {
        acc.push(row, col_empty);
      }

      return acc;
    }, []);

    const suggestedCoords = emptyCoords.reduce((acc, element, ind, array) => {
      const next = element + 1;
      const prev = element - 1;

      if (ind === 0) {
        const col = array[ind + 1];

        if (prev >= 0) {
          acc.push([prev, col, state[prev][col]]);
        } else {
          acc.push([]);
        }

        if (next <= quantityRows - 1) {
          acc.push([next, col, state[next][col]]);
        } else {
          acc.push([]);
        }

        return acc;
      }

      const row = array[ind - 1];
      if (prev >= 0) {
        acc.push([row, prev, state[row][prev]]);
      } else {
        acc.push([]);
      }

      if (next <= quantityRows - 1) {
        acc.push([row, next, state[row][next]]);
      } else {
        acc.push([]);
      }

      return acc;
    }, []);

    let canMove = false;
    const [up, down, left, right] = suggestedCoords;

    const keyMatching = {
      38: down,
      40: up,
      39: left,
      37: right,
    };

    let elementToMove;
    let elementToMoveIndex;
    const [row, col, value] = keyMatching[mainKey] || [];
    const emptyElIndex = currentState.indexOf(empty);

    if (isClick) {
      canMove = suggestedCoords.some(([row, col, value]) => value === mainKey);
      elementToMove = mainKey;
    } else {
      canMove = !!keyMatching[mainKey].length;
      elementToMove = value;
    }

    elementToMoveIndex = currentState.indexOf(elementToMove);

    if (canMove) {
      const newState = [...currentState];

      newState[emptyElIndex] = !isClick ? value : mainKey;
      newState[elementToMoveIndex] = empty;

      const isWin = winState.every((item, index) => item === newState[index]);

      this.props.setCurrentState({
        currentState: newState,
        steps: this.props.steps + 1,
        isWin,
      });
    }
  };

  handleCheatBtnClick = () => {
    this.props.setCurrentState({
      currentState: Object.keys(this.props.images),
      steps: 0,
      isWin: true,
    });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.commonHandler);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isWin !== prevProps.isWin && !!this.props.isWin) {
      setTimeout(() => {
        this.props.onTipAnimation();
      }, 700);
    }
  }

  render() {
    const { images, mainImage, quantityRows, empty, currentState, isWin, isFullImage, steps, isTip } = this.props;

    return (
      <GameBlock>
        <GameTitle onClick={this.handleClick}> Puzzle - game </GameTitle>
        <GameHeader>
          <div> Your Steps: {steps} </div> <button onClick={this.handleStartBtnClick}> Start new game </button>
        </GameHeader>
        <GameBoardWrap>
          {isTip ? (
            <TipBlock bgImg={mainImage} />
          ) : (
            <GameBoard isWin={isWin}>
              {currentState &&
                currentState.map((item, index) => (
                  <Ceil
                    key={index}
                    item={item}
                    isEmpty={item === empty}
                    isFullImage={isFullImage}
                    img={images[item]}
                    quantityRows={quantityRows}
                    handleCeilClick={this.commonHandler}
                  />
                ))}
            </GameBoard>
          )}
        </GameBoardWrap>
        <GameHeader>
          <button onClick={this.handleTipBtnClick} disabled={isWin}>
            See full image
          </button>

          <button onClick={this.handleCheatBtnClick} disabled={isWin}>
            Сheat
          </button>
        </GameHeader>
      </GameBlock>
    );
  }
}

Game.propTypes = propTypes;

export default HOC(Game);
