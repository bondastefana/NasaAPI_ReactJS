import { Container, Row, Col } from 'react-bootstrap'
import './Video.scss'

function Video(props) {
  const { pictureInfo } = props

  return (
    <Container className="video-container">
      <Row>
        <Col xs={12}>
          <h4>{pictureInfo?.title}</h4>
          <p className="explanation">{pictureInfo?.explanation}</p>
        </Col>

        <Col xs={12} className="iframe-container">
          <iframe src={pictureInfo.url} title="video"></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default Video
