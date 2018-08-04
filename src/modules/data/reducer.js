import * as types from './constants';
import sha256 from 'sha-256-js';

// Take data drom local storage
let localStorageData = JSON.parse(localStorage.getItem('diceGame'));
if (localStorageData === null) {
  localStorageData = false;  
}

// Generate random number and hash
let randomNumber = Math.floor(Math.random()*101),
    stringRandonNumber = randomNumber.toString(),
    hash = sha256(stringRandonNumber);

const initialState = {
  balance: localStorageData? localStorageData.balance: 100,
  result: randomNumber,
  win: localStorageData? localStorageData.winStatus : 'start',
  betAmount: localStorageData? localStorageData.betAmount: 20,
  number: localStorageData? localStorageData.number: 25,
  hash: hash,
  oldResult: localStorageData? localStorageData.result: 'start'
};

function dataReducer(state = initialState, { type, payload }) {
  switch (type) {

    case types.ADD_FREE_CREDITS:
      return {
        ...state,
        balance: payload
      }

    case types.CHANGE_BET_AMOUNT:
      return {
        ...state,
        betAmount: payload
      }

    case types.CHANGE_NUMBER:
      return {
        ...state,
        number: payload
      }

    case types.CHANGE_RESULT:
      return {
        ...state,
        result: payload
      }

    case types.CHANGE_OLD_RESULT:
      return {
        ...state,
        oldResult: state.result
      }  

    case types.CHANGE_STATUS_WIN:
      return {
        ...state,
        win: payload
      }

    case types.CHANGE_BALANCE:
      return {
        ...state,
        balance: payload
      }

    case types.ADD_NEW_HASH:
      return {
        ...state,
        hash: payload
      }     

    default:
      return state;
  }
}

export default dataReducer;
