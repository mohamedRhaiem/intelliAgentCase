import { graphql, QueryResult } from 'react-apollo';
import { OrgQuery } from '../graphql/schema-model';
import { GET_REPOSITORIES_OF_ORGANIZATION } from './requestApollo';

export interface WithRepositoryProps {
  repositoriesFetch: QueryResult & OrgQuery;
};

export const withRepositories =
  graphql(GET_REPOSITORIES_OF_ORGANIZATION,
    {
      options: () => ({
        variables: {
        },
        //must be cache-and-network to refrech data after mutate
        fetchPolicy: "cache-and-network",
      }),
      name: 'repositoriesFetch',
      alias: 'withRepositories'
    }
  );