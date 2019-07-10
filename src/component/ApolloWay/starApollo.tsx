import * as React from 'react';
import { starRep } from '../../graphql/service/starService';

const Star = ({ id }) => {

  const handleChange = () => starRep(id);

  return (
    <i
      className="fas fa-star"
      style={{ cursor: 'pointer', float: 'right', color: 'grey' }}
      onClick={handleChange}
    />
  );
};

export default Star;
