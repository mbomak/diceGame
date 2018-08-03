import { combineReducers } from 'redux';

import headerMenu from 'modules/data';

const rootReducer = combineReducers({
  menu: headerMenu
});

export default rootReducer;
