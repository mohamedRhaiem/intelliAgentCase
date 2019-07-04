import * as React from 'react';
import SelectContainer from "./selectContainer";
import Star from './star';
import UnStar from './unstar';

const RepositoryList = ({ repositories, selectedRepositoryIds }) => (
    <ul>{
        repositories.edges.map(({ node }) => {
            const isSelected = selectedRepositoryIds.includes(node.id);

            const rowClassName = ['row'];

            if (isSelected) {
                rowClassName.push('row_selected');
            }

            return (
                <li className={rowClassName.join(' ')} key={node.id} >
                    <SelectContainer id={node.id} isSelected={isSelected} /> {' '}
                    < a href={node.url} > {node.name} </a>{' '}
                    {
                        node.viewerHasStarred ? <UnStar id={node.id} /> : <Star id={node.id} />}
                </li>
            );
        })
    }
    </ul>
);

export default RepositoryList;