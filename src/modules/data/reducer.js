//import { fromJS } from 'immutable';
import * as types from './constants';

// const initialState = fromJS({
//   byId: {},
//   ids: [],
//   selected: null,
//   type: 'default'
// });

const initialState = [
    {
        id: 1,
        title: 'menu'
    }
];

function menuReducer(state = initialState, { type, payload }) {
  switch (type) {

    case types.ADD_MENU:
      return [
        ...state,
        payload
      ]

    default:
      return state;
  }
}

export default menuReducer;
