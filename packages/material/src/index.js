import React from 'react'

import './index.css'

const Typography = ({variant, children, ...other}) => {
  let Element = 'p'
  let className = 'body1'

  switch (variant.toLowerCase()) {
    case 'h1':
      Element = 'h1'
      className = 'h1'
      break;

    case 'h2':
      Element = 'h2'
      className = 'h2'
      break;

    case 'h3':
      Element = 'h3'
      className = 'h3'
      break;

    case 'h4':
      Element = 'h4'
      className = 'h4'
      break;

    case 'h5':
      Element = 'h5'
      className = 'h5'
      break;

    case 'h6':
      Element = 'h6'
      className = 'h6'
      break;

    case 'subtitle1':
      Element = 'h6'
      className = 'subtitle1'
      break;

    case 'subtitle2':
      Element = 'h6'
      className = 'subtitle2'
      break;
    
    case 'subtitle3':
      Element = 'h6'
      className = 'subtitle3'
      break;

    case 'body1':
      Element = 'p'
      className = 'body1'
      break;

    case 'body2':
      Element = 'p'
      className = 'body2'
      break;

    case 'button':
      Element = 'span'
      className = 'button'
      break;

    case 'caption':
      Element = 'span'
      className = 'caption'
      break;

    case 'overline':
      Element = 'span'
      className = 'overline'
      break;

    default:
      Element = 'p'
      className = 'body1'
  }

  return <Element className={className} {...other}>{children}</Element>
}

export default Typography
