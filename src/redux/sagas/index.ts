// @flow
import { watchGetRepos } from './Repos';

export default function* rootSaga() {
  yield [
    watchGetRepos(),
  ];
}
