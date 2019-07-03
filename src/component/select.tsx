import * as React from 'react';

const Select = ({ isSelected, toggleSelectRepository }) => (
    <button type="button" onClick={toggleSelectRepository} >
        {isSelected ? 'Unselect' : 'Select'}
    </button>
);

export default Select;