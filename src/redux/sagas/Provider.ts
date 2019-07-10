import {
    put,
    takeEvery,
    //    select 
} from 'redux-saga/effects';
import {
    GET_REPOSITORIES,
    CALL_REST,
    CALL_APOLLO,
    CHANGE_PROVIDER_SAGA,
    // CHANGE_PROVIDER
} from '../actionsThunk/types';

import { getRepositoriesRest } from '../../rest/service/repositoryService';
import { getRepositoriesApollo } from '../../graphql/service/repositoryService';


function* fetchRepository(action) {
    // const state = yield select();

    let res;
    switch (action.payload) {
        case CALL_REST:
            res = yield getRepositoriesRest();
        case CALL_APOLLO: {
            res = yield getRepositoriesApollo();
        }
    }
    yield put({ type: GET_REPOSITORIES, payload: res.data });
}

export default function* providerWatcher() {
    yield takeEvery(CHANGE_PROVIDER_SAGA, fetchRepository);
}
