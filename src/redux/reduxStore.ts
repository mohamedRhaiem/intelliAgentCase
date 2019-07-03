import { createStore, compose } from 'redux';

function repositoryReducer(state: any, action: any) {
    switch (action.type) {
        case 'TOGGLE_SELECT_REPOSITORY': {
            return applyToggleSelectRepository(state, action);
        }
        default:
            return state;
    }
}

function applyToggleSelectRepository(state: any, action: any) {
    const { id, isSelected } = action;

    const selectedRepositoryIds = isSelected
        ? state.selectedRepositoryIds.filter((itemId: string) => itemId !== id)
        : state.selectedRepositoryIds.concat(id);

    return { ...state, selectedRepositoryIds };
}

const initialState = {
    selectedRepositoryIds: [],
};

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default createStore(repositoryReducer, initialState as any,composeEnhancers());