import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import Title from './components/Title/Title.js'
import DateSelector from './components/DateSelector/DateSelector.js'
import Picture from './components/Picture/Picture.js'
import Video from './components/Video/Video.js'
import { detectDevice } from './utils.js'

function App() {
  const [nasaInfo, setNasaInfo] = useState({})
  const [visible, setVisible] = useState(true)
  const [errorVisible, setErrorVisible] = useState(false)
  const [errorResponse, setErrorResponse] = useState('')
  const [onClickRefresh, setOnClickRefresh] = useState(false)
  const userDevice = detectDevice()
  const baseURL = 'https://api.nasa.gov/planetary/apod?api_key='
  const key = 'lHbDxOJzKgudrE8byarsVEaAvBzmk6VxM8Fg2ELv'

  useEffect(() => {
    getNasaInfo()
  }, [])

  const getNasaInfo = () => {
    setVisible(true)

    return fetch(baseURL + key, { method: 'GET' })
      .then((response) => {
        return response.json()
      })
      .then((parsedResponse) => {
        setNasaInfo(parsedResponse)
        setVisible(false)

        if (errorVisible) {
          setErrorVisible(false)
        }
      })

      .catch(function (error) {
        console.log(error)
      })
  }

  const getSelectedDate = (date) => {
    setVisible(true)

    fetch(baseURL + key + `&date=${date}`, { method: 'GET' })
      .then(function (response) {
        return response.json()
      })
      .then(function (parsedResponse) {
        setNasaInfo(parsedResponse)
        setVisible(false)

        if (parsedResponse.code === 400) {
          setErrorResponse(parsedResponse.msg)
          setErrorVisible(true)
        } else {
          setErrorVisible(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleCloseError = () => {
    setErrorVisible(false)
    getNasaInfo()
  }

  const handleIconClick = () => {
    getNasaInfo()
    setOnClickRefresh(true)
  }

  const getAppClass = () => {
    if (userDevice === 'mobile') {
      return 'app app-mobile'
    } else if (userDevice === 'tablet') {
      return 'app app-tablet'
    } else {
      return 'app app-desktop'
    }
  }

  return (
    <Container fluid className={getAppClass()}>
      <Row>
        <Col xs={12}>
          <Title visible={visible} handleIconClick={handleIconClick} />
          <DateSelector
            resetDatePicker={!errorVisible}
            getDateInfo={getSelectedDate}
            onClickRefresh={onClickRefresh}
          />
        </Col>
        <Col xs={12} className="picture-container">
          <div className="alert-container">
            <Row className="alert-message">
              <Col xs={12} md={8}>
                {errorVisible ? (
                  <Alert
                    variant="danger"
                    transition={true}
                    onClose={handleCloseError}
                    dismissible
                  >
                    <Alert.Heading>You got an error!</Alert.Heading>
                    <p>{errorResponse}</p>
                  </Alert>
                ) : null}
              </Col>
            </Row>
          </div>

          {nasaInfo.media_type === 'image' ? (
            <Picture pictureInfo={nasaInfo} />
          ) : !errorVisible ? (
            <Video pictureInfo={nasaInfo} />
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}

export default App
