import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './components/Title/Title.js'
import DateSelector from './components/DateSelector/DateSelector.js'
import Picture from './components/Picture/Picture.js'

function App() {
  const [nasaInfo, setNasaInfo] = useState({})
  const [visible, setVisible] = useState(true)
  const baseURL = 'https://api.nasa.gov/planetary/apod?api_key='
  const key = 'lHbDxOJzKgudrE8byarsVEaAvBzmk6VxM8Fg2ELv'

  useEffect(() => {
    getNasaInfo()
  }, [])

  const getNasaInfo = () => {
    return fetch(baseURL + key, { method: 'GET' })
      .then((response) => {
        return response.json()
      })
      .then((parsedResponse) => {
        setNasaInfo(parsedResponse)
        setVisible(false)
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
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Title visible={visible} />
          <DateSelector getDateInfo={getSelectedDate} />
        </Col>
        <Col xs={12} className="spinner-container"></Col>
        <Col xs={12} className="picture-container">
          <Picture pictureInfo={nasaInfo} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
