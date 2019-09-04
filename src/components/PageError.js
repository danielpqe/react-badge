import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">:O {props.error.message} :v</div>;
}

export default PageError;