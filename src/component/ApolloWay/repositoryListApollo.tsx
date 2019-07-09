import * as React from 'react';
import RepositoryApollo from './repositoryApollo';

const RepositoryListApollo = ({ repositories }) => (
    <ul>{
        repositories.edges.map(({ node }) => {
            return (
                <RepositoryApollo key={node.id} node={node} />
            );
        })
    }
    </ul>
);

export default RepositoryListApollo;