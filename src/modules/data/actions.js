import * as types from './constants';

export function addFreeCredits() {
  return {
    type: types.ADD_FREE_CREDITS,
    payload: 100
  };
}

export function changeBetAmount(value) {
  return {
    type: types.CHANGE_BET_AMOUNT,
    payload: value
  };
}

export function changeNumber(value) {
  return {
    type: types.CHANGE_NUMBER,
    payload: value
  };
}

export function changeResult(value) {
  return {
    type: types.CHANGE_RESULT,
    payload: value
  };
}

export function changeOldResult(value) {
  return {
    type: types.CHANGE_OLD_RESULT,
    payload: value
  };
}

export function changeStatusWin(value) {
  return {
    type: types.CHANGE_STATUS_WIN,
    payload: value
  };
}

export function changeBalance(value) {
  return {
    type: types.CHANGE_BALANCE,
    payload: value
  };
}

export function addNewHash(value) {
  return {
    type: types.ADD_NEW_HASH,
    payload: value
  };
}