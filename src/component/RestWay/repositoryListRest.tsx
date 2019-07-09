import * as React from 'react';
import RepositoryRest from './repositoryRest';
import { has } from 'lodash';


const RepositoryListRest = ({ repositories }) => {

    return (
        <React.Fragment>
            {
                repositories.map((node) => {
                    const repository = has(node, 'node') ? node.node : node;
                    return <RepositoryRest key={repository.id} node={repository} />
                })
            }
        </React.Fragment>
    )
}

export default RepositoryListRest;