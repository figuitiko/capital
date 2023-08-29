import ListItemsWords from './components/ListItemsWords'
import MyForm from './components/MyForm'
import { useAppData } from './hooks/useAppData'

function App () {
  const { appData, appDataTostring, isDuplicate, handleChange, handleSubmit, handleRemoveData, handleOnBlurData } = useAppData(['chickend'])
  return (
    <div className='w-full max-w-md flex flex-col gap-8 justify-center items-center'>
      <div className='w-full  flex  flex-col justify-center'>
        <h3 className='text-3xl text-blue-700 font-bold flex text-center w-full mb-4 '>List of Words</h3>
        <div className='text-2xl font-bold text-gray-900 dark:text-white overflow-y-scroll p-5 border-2 border-slate-500 h-[200px]'>{appDataTostring}</div>
      </div>
      <ListItemsWords listItems={appData} handleRemove={handleRemoveData} handleOnBlurData={handleOnBlurData} />
      <MyForm handleOnChange={handleChange} handleSubmit={handleSubmit} />
      {
        isDuplicate && <span className='text-red-500 font-bold flex w-full'>Duplicate word</span>
      }
    </div>
  )
}

export default App
