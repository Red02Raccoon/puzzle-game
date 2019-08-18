import { connect } from 'react-redux';

import { setCurrentState, toggleTip, onTipAnimation, startNewGame } from '../../reducers/game/actions';

const mapStateToProps = ({ game: { currentStateOnStep, tip, animation } }, { images }) => {
  const keys = Object.keys(images);
  const length = keys.length;

  const { currentState, isWin, steps } = currentStateOnStep;
  const { isTip } = tip;
  const { isFullImage } = animation;

  return {
    quantityRows: Math.sqrt(length),
    winState: keys,
    empty: keys[length - 1],

    currentState,
    isWin,
    steps,

    isTip,

    isFullImage,
  };
};

const mapDispatchToProps = {
  startNewGame,
  setCurrentState,
  toggleTip,
  onTipAnimation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
