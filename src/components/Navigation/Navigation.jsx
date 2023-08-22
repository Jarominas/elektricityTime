import { Navbar, Container } from 'react-bootstrap'
import logo from '../public/logo.svg'

const Navigation = () => {
      return (
            <Navbar className='bg-body-tertiary'>
                  <Container>
                        <Navbar.Brand href='#home'>
                              <img src={logo} alt='' width={30} height={30} />
                              Navbar with text
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className='justify-content-end'>
                              <Navbar.Text>
                                    Signed in as: <a href='#login'>Mark Otto</a>
                              </Navbar.Text>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      )
}

export default Navigation
