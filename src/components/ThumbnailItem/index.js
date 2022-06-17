// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageList, updateImage, image} = props

  const {id, imageUrl, thumbnailUrl, thumbnailAltText} = eachImageList
  const updateGallery = () => {
    updateImage(id)
  }

  const activeImage = imageUrl === image
  const activeButton = activeImage ? 'active-image' : 'normal-image'
  return (
    <li className="thumbnail-card">
      <button type="button" className="button" onClick={updateGallery}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeButton}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
