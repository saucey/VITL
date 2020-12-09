import { combineEpics } from 'redux-observable';

import { productsEpic } from './productsEpic';

export const rootEpic = combineEpics(
  productsEpic,
);