export const GET_REPOSITORIES = 'GET_REPOSITORIES';
export const STAR_REPOSITORY = 'STAR_REPOSITORY';
export const UNSTAR_REPOSITORY = 'UNSTAR_REPOSITORY';
export const CHANGE_PROVIDER = 'CHANGE_PROVIDER';
export const INIT_REPOSITORIES = 'INIT_REPOSITORIES';
export const CHANGE_PROVIDER_SAGA = 'CHANGE_PROVIDER_SAGA';
export const CALL_REST = '1';
export const CALL_APOLLO = '2';
export const CONFIG_ENDPOINT = {
    'getRepositories': CALL_APOLLO,
    'getUsers': CALL_REST,
    'starRepo': CALL_APOLLO,
    'unstarRepo': CALL_REST
}


