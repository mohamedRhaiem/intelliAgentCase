import * as React from 'react';
import { starRep } from '../../rest/service/starRepService';


const StarRest = ({ owner, repo }) => {

  const handleChange = () => starRep(owner, repo);

  return (
    <i
      className="fas fa-star"
      style={{ cursor: 'pointer', float: 'right', color: 'grey' }}
      onClick={handleChange}
    />
  );
};

export default StarRest;