import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PriceInfo from './PriceInfo'
import Switcher from './Switcher'
import Price from './Price'
import { Link } from 'react-router-dom'

const Header = (props) => {
      return (
            <Container>
                  <Row>
                        <Col className='d-flex flex-column align-items-start'>
                              <PriceInfo {...props} />
                        </Col>
                        <Col className='d-flex align-items-center justify-content-center'>
                              <Switcher {...props} />
                        </Col>
                        <Col className='d-flex flex-column align-items-end'>
                              <Link to={'/pricepage'} className=''>
                                    <Price {...props} />
                              </Link>
                        </Col>
                  </Row>
            </Container>
      )
}

export default Header
