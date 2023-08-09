import React from 'react'

const Report = () => {
  return (
      <ul className='flex justify-center items-center mt-8'>
        <li className='w-1/6 h-auto'>
          <p>Words</p>
          <h3>50</h3>
        </li>
        <li className='w-1/6  h-auto'>
          <p>Characters</p>
          <h3>50</h3>
        </li>
        <li className='w-1/6  h-auto'>
          <p>Sentences</p>
          <h3>50</h3>
        </li>
        <li className='w-1/6  h-auto'>
          <p>Paragraphs</p>
          <h3>50</h3>
        </li>
      </ul>
  )
}

export default Report