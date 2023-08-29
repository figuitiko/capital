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
  const handleOnBlurData = (word, newWord) => {
    if (!newWord) return
    const indexOfWord = appData.indexOf(word)
    if (indexOfWord === -1) return
    const firstPart = appData.slice(0, indexOfWord)
    const secondPart = appData.slice(indexOfWord + 1)
    const newData = [...firstPart, newWord, ...secondPart]
    setAppData(newData)
  }
  const appDataTostring = appData.join(', ')
  return { appData, appDataTostring, formData, isDuplicate, handleChange, handleSubmit, handleRemoveData, handleOnBlurData }
}
