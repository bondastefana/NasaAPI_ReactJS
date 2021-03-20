import nasaPic from './nasa.png'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Title.scss'
import { detectDevice } from '../../utils.js'

function Title(props) {
  const { visible, handleIconClick } = props
  const userDevice = detectDevice()

  return (
    <Container className="title-container">
      <Row>
        <Col
          xs={12}
          md={4}
          className={
            !visible ? 'app-logo-container' : 'app-logo-container blur'
          }
        >
          <Image
            onClick={handleIconClick}
            src={nasaPic}
            alt="logo"
            className="app-logo"
          />
        </Col>
        <Col
          xs={12}
          md={8}
          className={
            userDevice === 'tablet' || userDevice === 'desktop'
              ? 'tablet-or-up'
              : ''
          }
        >
          <h1
            className={
              userDevice === 'tablet' || userDevice === 'desktop'
                ? 'h1-tablet-or-up'
                : ''
            }
          >
            Astronomy Picture of the Day
          </h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Title
