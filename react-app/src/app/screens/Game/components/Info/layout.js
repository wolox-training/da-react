import React from 'react';

function Info({ status, movesList }) {
  return (
    <React.Fragment>
      <div>{status}</div>
      <ol>{movesList}</ol>
    </React.Fragment>
  );
}

export default Info;
