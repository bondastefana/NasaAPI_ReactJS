import './App.css'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './components/Title/Title.js'
import DateSelector from './components/DateSelector/DateSelector.js'
import Picture from './components/Picture/Picture.js'

function App() {
  const [nasaInfo, setNasaInfo] = useState({})
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
      })

      .catch(function (error) {
        console.log(error)
      })
  }

  const getSelectedDate = (date) => {
    fetch(baseURL + key + `&date=${date}`, { method: 'GET' })
      .then(function (response) {
        return response.json()
      })
      .then(function (parsedResponse) {
        setNasaInfo(parsedResponse)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <Title />
            <DateSelector getDateInfo={getSelectedDate} />
          </Col>
          <Col xs={12} lg={8}>
            <Picture pictureInfo={nasaInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
