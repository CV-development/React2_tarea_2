import Gallery from '../components/Gallery'
import { useContext } from 'react'
import { PicContext } from '../context/PicContext'

const Home = () => {
  const { picData } = useContext(PicContext)
  return (
    <>
      <h1>Natural Pic</h1>
      <div className='row'>
        {picData && picData.map(pic => (
          <Gallery
            key={pic.id}
            pic={pic}
          />
        ))}
      </div>
    </>
  )
}
export default Home
