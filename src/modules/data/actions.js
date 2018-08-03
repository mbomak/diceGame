import * as types from './constants';

export function addMenu(id, title) {
  return {
    type: types.ADD_MENU,
    payload: { id, title },
  };
}