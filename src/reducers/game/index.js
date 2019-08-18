import { combineReducers } from 'redux';

import * as constants from './constants';

const INITIAL_STATE = {
  currentStateOnStep: {},
  tip: {
    isTip: false,
  },
  animation: {
    isFullImage: false,
  },
};

const tip = (state = INITIAL_STATE.tip, { type, payload }) => {
  switch (type) {
    case constants.TOGGLE_TIP:
    case constants.START_NEW_GAME:
      return {
        ...state,
        isTip: payload.isTip,
      };
    default:
      return state;
  }
};

const currentStateOnStep = (state = INITIAL_STATE.currentStateOnStep, { type, payload }) => {
  switch (type) {
    case constants.SET_CURRENT_STEP_STATE:
    case constants.START_NEW_GAME:
      return {
        ...state,
        currentState: payload.currentState,
        steps: payload.steps,
        isWin: payload.isWin,
      };
    default:
      return state;
  }
};

const animation = (state = INITIAL_STATE.animation, { type }) => {
  switch (type) {
    case constants.ON_TIP_ANIMATION:
      return {
        ...state,
        isFullImage: true,
      };
    case constants.OFF_TIP_ANIMATION:
    case constants.START_NEW_GAME:
      return {
        ...state,
        isFullImage: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  currentStateOnStep,
  tip,
  animation,
});
