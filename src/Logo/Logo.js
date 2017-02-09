import React from 'react';

const Logo = ({ alt }) => (
  <img src={require('../../assets/civic-logo-animated-invert.svg')} alt={alt} />
);

const Logo = () => {
  const svg = require.ensure([], require => require('../../assets/civic-logo.svg'));

  return (
    <div>
    {svg}
    </div>
  );

}

export default Logo;
