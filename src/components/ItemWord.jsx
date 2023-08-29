import React from 'react'

const ItemWord = ({ word, handleRemove, isOne }) => {
  return (
    <div className='flex'>
      {
        !isOne && <span className='text-red-500 font-bold flex w-full mr-4'>,</span>
      }
      <div className='bg-slate-500  flex   items-center justify-center max-h-12 rounded-lg  '>
        <span className='text-white flex mx-8 self-center justify-self-center '>{word}</span>
        <span className='text-white cursor-pointer self-start mr-2 ' onClick={() => handleRemove(word)}>x</span>
      </div>
    </div>
  )
}

export default ItemWord
