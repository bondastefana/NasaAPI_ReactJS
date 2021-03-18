import './Picture.css'

function Picture(props) {
  const { pictureInfo } = props

  return (
    <div>
      <div id="loader"></div>
      <h4>
        Today's picture: <span>{pictureInfo?.title}</span>
        <div>
          <img src={pictureInfo?.hdurl} alt="pic" />
        </div>
      </h4>
    </div>
  )
}

export default Picture
