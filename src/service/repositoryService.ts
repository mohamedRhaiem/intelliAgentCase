import { graphql, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { OrgQuery } from '../graphql/schema-model';

export interface WithRepositoryProps {
  repositoriesFetch: QueryResult & OrgQuery;
};

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export const withRepositories =
  graphql(GET_REPOSITORIES_OF_ORGANIZATION,
    {
      options: () => ({
        variables: {
        },
        //must
        fetchPolicy: "cache-and-network",
      }),
      name: 'repositoriesFetch',
      alias: 'withRepositories'
    }
  );