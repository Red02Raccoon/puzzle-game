import * as constants from './constants';

export const setCurrentState = payload => ({
  type: constants.SET_CURRENT_STEP_STATE,
  payload,
});

export const startNewGame = payload => ({
  type: constants.START_NEW_GAME,
  payload,
});

export const toggleTip = payload => ({
  type: constants.TOGGLE_TIP,
  payload,
});

export const onTipAnimation = payload => ({
  type: constants.ON_TIP_ANIMATION,
  payload,
});

export const offTipAnimation = payload => ({
  type: constants.OFF_TIP_ANIMATION,
  payload,
});
