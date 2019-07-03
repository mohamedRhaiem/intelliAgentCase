import { QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { OrgQuery } from '../graphql/schema-model';
import client from '../provider/apollo';
import { GET_REPOSITORIES_OF_ORGANIZATION } from './repositoryService';

export interface WithRepositoryProps {
  repositoriesFetch: QueryResult & OrgQuery;
};

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export async function starRep(id: string): Promise<any> {
  return client.mutate({
    mutation: STAR_REPOSITORY,
    variables: {
      id: id
    },
    refetchQueries: [{
      query: GET_REPOSITORIES_OF_ORGANIZATION,
      variables: {
      }
    }],
  }).then((response) => {
    console.log(response);
  })
};
