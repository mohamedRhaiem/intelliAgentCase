import { CHANGE_PROVIDER_SAGA, INIT_REPOSITORIES } from "../actionsThunk/types";

export const getRepositoriesSaga = () => ({
    type: INIT_REPOSITORIES,
});

export const changeProviderSaga = (value) => ({
    type: CHANGE_PROVIDER_SAGA, payload: value
});