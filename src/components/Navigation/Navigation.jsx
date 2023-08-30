import { Navbar, Container } from 'react-bootstrap'
import logo from '/src/logo.svg'

const Navigation = () => {
      return (
            <Navbar className='bg-body-tertiary m-2'>
                  <Container>
                        <Navbar.Brand href='#home'>
                              <img src={logo} alt='' width={40} height={40} />
                              Electricity/Gas Prices
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className='justify-content-end'></Navbar.Collapse>
                  </Container>
            </Navbar>
      )
}

export default Navigation
