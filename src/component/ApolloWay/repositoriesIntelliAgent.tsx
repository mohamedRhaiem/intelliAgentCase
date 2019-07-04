import { WithRepositoryProps } from '../../service/repositoryService';
import * as React from 'react';
import Repositories from './repositories';

export const RepositoriesIntelliAgent: React.SFC<WithRepositoryProps> = (props) => {
    const {
        repositoriesFetch: { loading, organization },
    } = props;

    if (loading || !organization) {
        return <div>Loading ...</div>;
    }
    return (
        <Repositories repositories={organization.repositories} />
    );
};