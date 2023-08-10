import React,{useState} from 'react'
import Report from './report';


const Textarea = () => {
  let [input, setInput]=useState('');
  const words= input.split(/\s+/).filter((word)=>word!=='').length;
  const characters= input.length;
  const sentenceCount= input.split(/[?!.]/).filter(sentence=>sentence.trim()!=='').length;
  const paragraphCount= input.split('/n/n').filter(paragraph=>paragraph.trim()!=='').length;

  const handleInput=(event)=>{
     setInput(event.target.value);
  }
  //Action button methods.
  const handleUpperCase = () => {
    setInput(input.toUpperCase());
  };

  const handleLowerCase = () => {
    setInput(input.toLowerCase());
  };

  const clear=()=>{
    setInput('')
  }

  const copyText=()=>{
    if(input){
      navigator.clipboard.writeText(input)
      alert(input, 'Copied');
    }
  }

  return (
<div className="h-screen flex items-center flex-col mt-8">
  <Report words={words} characters={characters} sentenceCount={sentenceCount} paragraphCount={paragraphCount} />
  <textarea className="h-1/2 w-1/2 mb-8 border-solid border-2 border-black text-black " placeholder='Write your text here...' onChange={handleInput} value={input}></textarea>
  <ul className='flex flex-row justify-center gap-4'>
    <li><button  className='border-full shadow-lg bg-sky-400' onClick={handleUpperCase}>Upper Case</button></li>
    <li><button className='border-full shadow-lg bg-sky-400	' onClick={handleLowerCase}>Lower Case</button></li>
    <li><button className='border-full shadow-lg bg-red-400	' onClick={clear}>Clear Text</button></li>
  </ul>
  <button className='border-full shadow-lg bg-green-400 mt-8	' onClick={copyText}>Copy</button>
</div>
  )
}

export default Textarea