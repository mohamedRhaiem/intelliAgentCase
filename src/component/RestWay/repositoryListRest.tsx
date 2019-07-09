import * as React from 'react';
import RepositoryRest from './repositoryRest';


const RepositoryListRest = ({ repositories }) => {

    return (
        <React.Fragment>
            {
                repositories.map((node) => {
                    return <RepositoryRest key={node.id} node={node} />
                })
            }
        </React.Fragment>
    )
}

export default RepositoryListRest;