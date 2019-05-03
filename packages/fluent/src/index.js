import React from 'react';

import './index.css';

const Typography = ({ variant = 'body', children, ...other }) => {
  let Element = 'p';
  let className = 'body';

  switch (variant.toLowerCase()) {
    case 'header':
      Element = 'h1';
      className = 'header';
      break;

    case 'subheader':
      Element = 'h2';
      className = 'subheader';
      break;

    case 'title':
      Element = 'h5';
      className = 'title';
      break;

    case 'subtitle':
      Element = 'h6';
      className = 'subtitle';
      break;

    case 'body':
      Element = 'p';
      className = 'body';
      break;

    case 'base':
      Element = 'p';
      className = 'base';
      break;

    case 'caption':
      Element = 'span';
      className = 'caption';
      break;

    default:
      Element = 'p';
      className = 'body';
  }

  return (
    <Element className={className} {...other}>
      {children}
    </Element>
  );
};

export default Typography;
