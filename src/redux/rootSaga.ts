import { all } from 'redux-saga/effects';

import authSagas from './sagas/auth.sagas';
import postSagas from './sagas/post.sagas';

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...postSagas,
  ]);
}
