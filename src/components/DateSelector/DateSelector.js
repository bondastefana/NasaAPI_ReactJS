import { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import './DateSelector.scss'

function DaySelector(props) {
  const { getDateInfo } = props

  const [date, setDate] = useState('')

  const handleSelectedDate = (event) => {
    setDate(event.target.value)
  }

  const submitDate = () => {
    getDateInfo(date)
  }

  return (
    <Container className="date-container">
      <Row>
        <Col xs={8}>
          <Form.Control
            onChange={handleSelectedDate}
            type="date"
            placeholder="Select Date"
          />
        </Col>
        <Col xs={4} className="butoon-container">
          <Button
            variant="outline-light"
            onClick={submitDate}
            disabled={!date}
            block
          >
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default DaySelector
