import * as React from 'react';
import { Mutation } from 'react-apollo';
import { REMOVE_STAR_REPOSITORY } from '../service/requestApollo';

const UnStar = ({ id }) => (
  <Mutation mutation={REMOVE_STAR_REPOSITORY} variables={{ id }}>
    {starRepository => (
      <button type="button" onClick={starRepository} >
        UnStar
        </button>
    )}
  </Mutation >
);

export default UnStar;