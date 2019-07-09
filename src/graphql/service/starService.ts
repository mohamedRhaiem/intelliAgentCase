import { QueryResult } from 'react-apollo';
import { OrgQuery } from '../schema-model';
import client from '../provider/apollo';
import { STAR_REPOSITORY,GET_REPOSITORIES_OF_ORGANIZATION } from './requestApollo';

export interface WithRepositoryProps {
  repositoriesFetch: QueryResult & OrgQuery;
};

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
