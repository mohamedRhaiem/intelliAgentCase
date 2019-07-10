import { put, takeEvery, select } from 'redux-saga/effects';
import {
  GET_REPOSITORIES,
  CALL_REST,
  CALL_APOLLO,
  INIT_REPOSITORIES,
  // CHANGE_PROVIDER
} from '../actionsThunk/types';

import { getRepositoriesRest } from '../../rest/service/repositoryService';
import { getRepositoriesApollo } from '../../graphql/service/repositoryService';


function* fetchRepository() {
  const state = yield select();

  let res;
  switch (state.repository.provider) {
    case CALL_REST:
      res = yield getRepositoriesRest();
    case CALL_APOLLO: {
      res = yield getRepositoriesApollo();
    }
  }

  yield put({ type: GET_REPOSITORIES, payload: res.data });
}

export default function* actionWatcher() {
  yield takeEvery(INIT_REPOSITORIES, fetchRepository)
}
