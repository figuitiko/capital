import { useState } from 'react'

const ItemWord = ({ word, handleRemove, isOne, handleOnblurData }) => {
  const [isEditable, setIsEditable] = useState(false)
  const handleDoubleClick = () => {
    setIsEditable(true)
  }
  const handleOnblur = (e) => {
    const newWord = e.target.value
    handleOnblurData(word, newWord)
    setIsEditable(false)
  }
  return (
    <div className='flex'>
      {
        !isOne && <span className='text-red-500 font-bold flex w-full mr-4'>,</span>
      }
      <div className='bg-slate-500  flex   items-center justify-center max-h-12 rounded-lg  '>
        {
          isEditable
            ? <input type='text' className='bg-transparent min-w-[40px] text-white text-sm p-2.5 rounded-lg focus:ring-blue-500  block w-full outline-none ' placeholder='Sample text...' onBlur={handleOnblur} />
            : <span className='text-white flex mx-8 self-center justify-self-center cursor-pointer' title='double click to edit' onDoubleClick={handleDoubleClick}>{word} </span>
        }
        <span className='text-white cursor-pointer self-start mr-2 ' onClick={() => handleRemove(word)}>x</span>
      </div>
    </div>
  )
}

export default ItemWord
