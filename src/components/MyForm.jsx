import React from 'react'

const MyForm = ({ handleOnChange, handleSubmit }) => {
  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Write a word here ...</label>
        <input onChange={handleOnChange} type='text' id='word' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Sample text...' required />
      </div>
      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center min-w-[100px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add</button>
    </form>

  )
}

export default MyForm
