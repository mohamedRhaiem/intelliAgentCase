import {
  takeLatest,
} from 'redux-saga/effects';

// function reposSuccessAction(data: Object, url: string) {
//   return put({
//     type: 'REPOS_SUCCESS',
//     payload: {
//       repositories: data,
//       result: data,
//       url,
//     },
//   });
// }

export function* getRepositories(action) {
  console.log(action);
}

export function* watchGetRepos() {
  yield takeLatest('GET_REPOSITORIES', getRepositories);
}
