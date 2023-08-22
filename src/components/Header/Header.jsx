import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PriceInfo from './PriceInfo'
import Switcher from './Switcher'
import Price from './Price'

const Header = () => {
      return (
            <Container>
                  <Row>
                        <Col className='d-flex flex-column align-items-start'>
                              <PriceInfo />
                        </Col>
                        <Col className='d-flex align-items-center justify-content-center'>
                              <Switcher />
                        </Col>
                        <Col className='d-flex flex-column align-items-end'>
                              <Price />
                        </Col>
                  </Row>
            </Container>
      )
}

export default Header
