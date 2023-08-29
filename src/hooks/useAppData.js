import { useState } from 'react'
import { removeDuplicateFromArray } from '../util/removeDuplicateFromArray'

export const useAppData = (initialState) => {
  const [appData, setAppData] = useState(initialState)
  const [isDuplicate, setIsDuplicate] = useState(false)
  const [formData, setFormData] = useState('')
  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!appData) return
    if (appData.includes(formData)) {
      setIsDuplicate(true)
      setTimeout(() => {
        setIsDuplicate(false)
      }, 2000)
      return
    }
    const newData = removeDuplicateFromArray([...appData, formData])
    setAppData(newData)
    setFormData('')
    e.target.reset()
  }
  const handleRemoveData = (word) => {
    const newData = appData.filter((item) => item !== word)
    setAppData(newData)
  }
  const appDataTostring = appData.join(', ')
  return { appData, appDataTostring, formData, isDuplicate, handleChange, handleSubmit, handleRemoveData }
}
