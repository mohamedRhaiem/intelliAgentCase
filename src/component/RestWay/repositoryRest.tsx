import * as React from 'react'
import Star from './starRest';
import UnStar from './unstarRest';

const RepositoryRest = ({ node }) => {
    const [show, setShow] = React.useState(false);
    return (
        <div key={node.id} className="card card-body mb-3">
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
                    node.viewerHasStarred ? <UnStar id={node.id} /> : <Star owner={node.owner.login} repo={node.name} />}
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

export default RepositoryRest;
