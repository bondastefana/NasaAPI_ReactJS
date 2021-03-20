import { useState, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import './DateSelector.scss'

function DaySelector(props) {
  const { getDateInfo, resetDatePicker } = props
  const [date, setDate] = useState('')

  const handleSelectedDate = (event) => {
    setDate(event.target.value)
  }

  const submitDate = () => {
    getDateInfo(date)
  }

  useEffect(() => {
    if (resetDatePicker || date) {
      setDate('')
    }
    return () => {}
  }, [resetDatePicker])

  return (
    <Container className="date-container">
      <Row className="input-row">
        <Col xs={8} md={6} lg={4}>
          <Form.Control
            onChange={handleSelectedDate}
            type="date"
            value={date}
            placeholder="Select Date"
          />
        </Col>
        <Col xs={4} md={2} className="butoon-container">
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
