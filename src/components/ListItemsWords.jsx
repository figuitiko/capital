import React from 'react'
import ItemWord from './ItemWord'

const ListItemsWords = ({ listItems, handleRemove }) => {
  return (
    <div className='flex  border-2 border-slate-500 px-8 py-4 h-[100px] w-full gap-4 overflow-x-scroll'>
      {
        listItems.map((item, index) => {
          return (
            <ItemWord key={index} word={item} handleRemove={handleRemove} isOne={index === 0} />
          )
        }
        )
      }
    </div>
  )
}

export default ListItemsWords
