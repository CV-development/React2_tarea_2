import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'
import { useContext } from 'react'
import { PicContext } from '../context/PicContext'

const Gallery = ({ pic }) => {
  const { picData, setPicData } = useContext(PicContext)

  const addAndRemoveFavorite = (id) => {
    const newPics = picData.map(picItem => {
      if (picItem.id === id) {
        return {
          ...picItem,
          liked: !picItem.liked
        }
      }
      return picItem
    })
    setPicData(newPics)
  }
  return (
    <div className='col-md-2 d-flex justify-content-center mb-2'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={pic.src.tiny} />
        <span
          style={{ position: 'absolute', top: 10, right: 10, color: 'white' }}
          onClick={() => addAndRemoveFavorite(pic.id)}
        > <IconHeart filled={pic.liked} />
        </span>
        <Card.Text style={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }}>
          {pic.alt}
        </Card.Text>
      </Card>
    </div>
  )
}
export default Gallery
