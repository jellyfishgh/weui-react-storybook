import React from 'react'

const Image = ({ name, style, className }) => (
  <img
    src={require(`@/assets/imgs/${name}`)}
    alt={name}
    className={className}
    style={style}
  />
)

export default Image
