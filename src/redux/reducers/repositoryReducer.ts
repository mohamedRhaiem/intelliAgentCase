import {
    GET_REPOSITORIES,
    STAR_REPOSITORY,
    UNSTAR_REPOSITORY,
    CALL_APOLLO,
    CHANGE_PROVIDER
} from '../actionsThunk/types';

const initialState = {
    repositories: [],
    provider: CALL_APOLLO
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload
            };
        case STAR_REPOSITORY:
            return {
                ...state
            };
        case UNSTAR_REPOSITORY:
            return {
                ...state
            };
        case CHANGE_PROVIDER:
            return {
                ...state,
                provider: action.payload
            }
        default:
            return state;
    }
}
