import * as React from 'react';
import { Mutation } from 'react-apollo';
import { REMOVE_STAR_REPOSITORY } from '../../graphql/service/requestApollo';


const UnStar = ({ id }) => (
  <Mutation mutation={REMOVE_STAR_REPOSITORY} variables={{ id }}>
    {starRepository => (
      <i
        className="fas fa-star"
        style={{ cursor: 'pointer', float: 'right', color: 'red' }}
        onClick={starRepository}
      />
    )}
  </Mutation >
);

export default UnStar;
