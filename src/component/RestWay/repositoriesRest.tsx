import * as React from 'react';
import HeaderTitle from '../layout/HeaderTitle';
import RepositoryListRest from './repositoryListRest';

export interface WithRepositoryProps {
  error: any,
  repositoriesFetch: {
    loading: boolean,
    repositories: []
  }
};


export const HigherOrderComponentApproach = (props: WithRepositoryProps) => {

  const {
    repositoriesFetch: { loading, repositories },
  } = props;

  if (loading || !repositories) {
    return <div>Loading ...</div>;
  }

  return (
    <React.Fragment>
      <HeaderTitle title="Rest Way" />
      <RepositoryListRest repositories={repositories} />
    </React.Fragment>
  );
};


