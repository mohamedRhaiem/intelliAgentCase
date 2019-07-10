import {
    GET_REPOSITORIES,
    CALL_REST,
    CALL_APOLLO,
    CHANGE_PROVIDER
} from './types';

import { getRepositoriesRest } from '../../rest/service/repositoryService';
import { getRepositoriesApollo } from '../../graphql/service/repositoryService';

export const getRepositories = (type?: string) => async (dispatch, getState) => {

    let switcher = type ? type : getState().repository.provider;
    let res;
    switch (switcher) {
        case CALL_REST:
            res = await getRepositoriesRest();
        case CALL_APOLLO: {
            res = await getRepositoriesApollo();
        }
    }
    dispatch({
        type: GET_REPOSITORIES,
        payload: res.data
    });
};

export const changeProvider = (type) => async dispatch => {
    dispatch(getRepositories(type));
    dispatch({
        type: CHANGE_PROVIDER,
        payload: type
    });
};

