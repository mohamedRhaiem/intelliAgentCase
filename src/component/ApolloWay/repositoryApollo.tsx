import * as React from 'react'
import UnStar from './unstarApollo';
import Star from './starApollo';

const RepositoryApollo = ({ node }) => {
    const [show, setShow] = React.useState(false);
    return (
        <div className="card card-body mb-3">
            <h4>
                {node.name}
                <i
                    onClick={() =>
                        setShow(!show)
                    }
                    className="fas fa-sort-down"
                    style={{ cursor: 'pointer' }}
                />
                {
                    node.viewerHasStarred ? <UnStar id={node.id} /> : <Star id={node.id} />}
            </h4>
            {show ? (
                <ul className="list-group">
                    <li className="list-group-item">URL: < a href={node.url} > {node.name} </a></li>
                    <li className="list-group-item">Description: {node.description} </li>
                </ul>
            ) : null}
        </div>
    )
}

export default RepositoryApollo;
