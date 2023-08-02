import React from 'react'

const Color = ({hex,name}) => {
  return (
    <div className={`bg-${hex} p-15`}>
      <h3>{name}</h3>
    </div>
  )
}

export default Color