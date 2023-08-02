import React from 'react'

const Color = ({hex,name}) => {
  return (
    <div style={{background: hex, padding:14}}>
      <h3>{name}</h3>
    </div>
  )
}

export default Color