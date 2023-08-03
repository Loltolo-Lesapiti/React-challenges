import React from 'react'

const Color = ({hex,name}) => {
  const textColor = hex === '#000000' ? 'white' : 'black'; 
  const border= hex === '#FFFFFF' ? '2px solid black': '';
  return (
    <div style={{background: hex, padding:14, border: border}}>
      <h3 style={{color:textColor}}>{name}</h3>
    </div>
  )
}

export default Color