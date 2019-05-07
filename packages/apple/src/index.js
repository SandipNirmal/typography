import React from 'react'

import './index.css'

const Typography = ({variant = 'body1', children, ...other}) => {
  let Element = 'p'
  let className = 'body1'

  switch (variant.toLowerCase()) {
    case 'largetitle':
      Element = 'h1'
      className = 'large-title'
      break;

    case 'title1':
      Element = 'h2'
      className = 'title1'
      break;

    case 'title2':
      Element = 'h3'
      className = 'title2'
      break;

    case 'title3':
      Element = 'h4'
      className = 'title2'
      break;

    case 'headline':
      Element = 'h5'
      className = 'headline'
      break;

    case 'body':
      Element = 'p'
      className = 'body'
      break;

    case 'callout':
      Element = 'p'
      className = 'callout'
      break;

    case 'Subhead':
      Element = 'h6'
      className = 'Subhead'
      break;

    case 'footnote':
      Element = 'span'
      className = 'footnote'
      break;

    case 'caption1':
      Element = 'span'
      className = 'caption1'
      break;
    
    case 'caption2':
      Element = 'span'
      className = 'caption2'
      break;

    default:
      Element = 'p'
      className = 'body'
  }

  return <Element className={className} {...other}>{children}</Element>
}

export default Typography
