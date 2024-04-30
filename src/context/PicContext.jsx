import { createContext, useEffect, useState } from 'react'

export const PicContext = createContext()

const PicProvider = ({ children }) => {
  const [picData, setPicData] = useState([])
  const getData = async () => {
    try {
      const response = await fetch('../public/photos.json')
      const data = await response.json()
      setPicData(data.photos)
    /* console.log(Object.values(picData)) */
    } catch (error) {
      console.error('error consiguiendo la data', error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <PicContext.Provider value={{ picData, setPicData }}>
      {children}
    </PicContext.Provider>
  )
}
export default PicProvider
