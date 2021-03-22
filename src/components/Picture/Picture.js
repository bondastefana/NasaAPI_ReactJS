import './Picture.scss'
import { Container, Col, Row, Image } from 'react-bootstrap'

function Picture(props) {
  const { pictureInfo } = props

  return (
    <Container className="content-container">
      <Row>
        <Col xs={12} lg={6}>
          <h4>
            {pictureInfo?.title} <span>({pictureInfo?.date})</span>
          </h4>
          <p className="explanation">{pictureInfo?.explanation}</p>
        </Col>

        <Col xs={12} lg={6} className="picture-container">
          <Image src={pictureInfo?.url} className="selectedImage" rounded />
        </Col>
      </Row>
    </Container>
  )
}

export default Picture
