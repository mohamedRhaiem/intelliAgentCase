import * as React from 'react';
import { starRep } from '../service/starService';

const Star = ({ id }) => {

  const handleChange = event => starRep(event.target.value);

  return (
    <button type="button" value={id} onClick={handleChange} >
      Star
    </button >
  );
};

export default Star;