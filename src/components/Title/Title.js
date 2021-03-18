import nasaPic from './nasa.png'

function Title(props) {
  return (
    <div>
      <img src={nasaPic} alt="logo" />
      <h1>Astronomy Picture of the Day</h1>
    </div>
  )
}

export default Title
