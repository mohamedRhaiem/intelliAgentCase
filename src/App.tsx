import * as React from 'react';
import { compose } from 'recompose';
import './App.css';
import { RepositoriesIntelliAgent } from './component/repositoriesIntelliAgent';

import { withRepositories } from './service/repositoryService';

export const MainComposeIntelliAgent = compose(
  withRepositories
)(RepositoriesIntelliAgent as any);

const App = () => {
  return <MainComposeIntelliAgent />;
}

export default App;