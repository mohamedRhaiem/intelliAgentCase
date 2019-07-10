// @flow
import repoWatcher from './Repos';
import providerWatcher from './Provider';

export default function* rootSaga() {
  yield [
    repoWatcher(),
    providerWatcher()
  ];
}
