import React from 'react';
import PropTypes from 'prop-types';

const DataDisplay = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
};

DataDisplay.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataDisplay;

