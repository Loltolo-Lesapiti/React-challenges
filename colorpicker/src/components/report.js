import React from 'react'

const Report = ({words,characters,sentenceCount,paragraphCount} ) => {
  return (
    <ul className='flex justify-center items-center gap-4 font-sans text-xl bg-slate-200 shadow-lg shadow-slate-200/50 text-black'>
        <li className='w-1/2 h-auto mx-8 '>
          <p>Words</p>
          <h3>{words}</h3>
        </li>
        <li className='w-1/2  h-auto mx-8'>
          <p>Characters</p>
          <h3>{characters}</h3>
        </li>
        <li className='w-1/2  h-auto mx-8'>
          <p>Sentences</p>
          <h3>{sentenceCount}</h3>
        </li>
        <li className='w-1/2  h-auto mx-8'>
          <p>Paragraphs</p>
          <h3>{paragraphCount}</h3>
        </li>
      </ul>
  )
}

export default Report