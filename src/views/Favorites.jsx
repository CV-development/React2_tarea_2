import Gallery from '../components/Gallery'
import { useContext } from 'react'
import { PicContext } from '../context/PicContext'

const Favorites = () => {
  const { picData } = useContext(PicContext)
  return (
    <>
      <h1>Fotos favoritas</h1>
      <div className='row'>
        {picData && picData.filter(pic => pic.liked).map(pic => (
          <Gallery
            key={pic.id}
            pic={pic}
          />
        ))}
      </div>
    </>
  )
}
export default Favorites
