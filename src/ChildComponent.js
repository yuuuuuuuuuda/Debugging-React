import React from 'react';

const ChildComponent = ({ message, counter }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>Counter Value: {counter}</p>
    </div>
  );
};

export default ChildComponent;
