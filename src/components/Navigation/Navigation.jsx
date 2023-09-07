import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import logo from '/src/logo.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
      return (
            <Navbar className='bg-body-tertiary m-2 d-flex'>
                  <Container>
                        <Link to={'/'} className='navbar-brand'>
                              <img src={logo} alt='' width={40} height={40} />
                              Elektrikell clone
                        </Link>

                        <Link to={'/contacts'}>
                              <Button variant='primary'>Contacts</Button>
                        </Link>
                  </Container>
            </Navbar>
      )
}

export default Navigation
