import React from 'react'
import Color from './Color'

const Colorpicker = ({colors}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
        {colors.map((color,index)=>{
            return <Color key={index} hex={color.hex} name={color.name} />
        })}
    </div>
  )
}

export default Colorpicker