import './Picture.scss'
import { Container, Col, Row, Image } from 'react-bootstrap'

function Picture(props) {
  const { pictureInfo } = props

  return (
    <Container className="picture-container">
      <Row>
        <Col xs={12}>
          <h4>{pictureInfo?.title}</h4>
        </Col>

        <Col xs={12}>
          <Image src={pictureInfo?.url} className="selectedImage" rounded />
        </Col>
      </Row>
    </Container>
  )
}

export default Picture
