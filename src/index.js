// This component also requires 'react',
// but it has already been included in the
// list of dependencies in package.json
import React from 'react';

import './MyCoolButton.css';

const MyCoolButton = ({ type, title, onClick }) => (
  <button
    type={type}
    className="container"
    onClick={onClick}
  >
    {title}
  </button>
);

export default MyCoolButton;