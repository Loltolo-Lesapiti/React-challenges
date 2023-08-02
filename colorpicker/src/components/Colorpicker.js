import React from 'react'
import Color from './Color'

const Colorpicker = ({colors}) => {
  return (
    <div className='flex justify-around'>
        {colors.map((color,index)=>{
            return <Color key={index} hex={color.hex} name={color.name} />
        })}
    </div>
  )
}

export default Colorpicker