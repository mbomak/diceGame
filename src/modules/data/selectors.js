import { createSelector } from 'reselect';

const data = state => state;

const takeBalance = createSelector(
    data,
    obj => +obj.data.balance
);

const takeResult = createSelector(
    data,
    obj => obj.data.result
);

const takeWinStatus = createSelector(
    data,
    obj => obj.data.win
);

const takeBetAmount = createSelector(
    data,
    obj => +obj.data.betAmount
);

const takeNumber = createSelector(
    data,
    obj => +obj.data.number
);

const takeHash = createSelector(
    data,
    obj => obj.data.hash
);

const takeOldResult = createSelector(
    data,
    obj => obj.data.oldResult
);

export default {
  takeBalance,
  takeResult,
  takeWinStatus,
  takeBetAmount,
  takeNumber,
  takeHash,
  takeOldResult
};
