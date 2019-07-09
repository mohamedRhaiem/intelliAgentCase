import { graphql, QueryResult } from 'react-apollo';
import { OrgQuery } from '../schema-model';
import { GET_REPOSITORIES_OF_ORGANIZATION } from './requestApollo';
import client from '../provider/apollo';

export interface WithRepositoryProps {
  repositoriesFetch: QueryResult & OrgQuery;
};

export async function getRepositoriesApollo(): Promise<any> {

  return client.query({
    query: GET_REPOSITORIES_OF_ORGANIZATION,
    fetchPolicy: 'network-only'
  })
    .then(res => {
      res.data = res.data.organization.repositories.edges
      return res;
    });
}


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