import * as React from 'react';
import { WithRepositoryProps } from '../../graphql/service/repositoryService';
import HeaderTitle from '../layout/HeaderTitle';
import RepositoryListApollo from './repositoryListApollo';

export const RepositoriesApollo: React.SFC<WithRepositoryProps> = (props) => {
    const {
        repositoriesFetch: { loading, organization },
    } = props;

    if (loading || !organization) {
        return <div>Loading ...</div>;
    }
    return (
        <React.Fragment>
            <HeaderTitle title="ApolloWay" />
            <RepositoryListApollo repositories={organization.repositories} />
        </React.Fragment>
    );
};