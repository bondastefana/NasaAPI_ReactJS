import nasaPic from './nasa.png'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Title.scss'

function Title(props) {
  const { visible } = props

  return (
    <Container className="title-container">
      <Row>
        <Col
          xs={12}
          className={
            !visible ? 'app-logo-container' : 'app-logo-container blur'
          }
        >
          <Image src={nasaPic} alt="logo" />
        </Col>
        <Col xs={12}>
          <h1>Astronomy Picture of the Day</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Title
