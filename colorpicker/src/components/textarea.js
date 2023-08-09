import React from 'react'

const Textarea = () => {
  return (
<div className="h-screen flex items-center flex-col mt-8">
  <textarea className="h-1/2 w-1/2 mb-8 border-solid border-2 border-black "></textarea>
  <ul className='flex flex-row justify-center gap-4'>
    <li><button  className='border-full shadow-lg bg-sky-400'>Upper Case</button></li>
    <li><button className='border-full shadow-lg bg-sky-400	'>Lower Case</button></li>
    <li><button className='border-full shadow-lg bg-sky-400	'>Sentence Case</button></li>
    <li><button className='border-full shadow-lg bg-sky-400	'>Tim text</button></li>
    <li><button className='border-full shadow-lg bg-red-400	'>Clear Text</button></li>
  </ul>
  <button className='border-full shadow-lg bg-green-400 mt-8	'>Copy</button>
</div>
  )
}

export default Textarea