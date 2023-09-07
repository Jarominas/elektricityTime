import './app.scss'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Body from './components/Body/Body'
import Footer from './components/Footer'
import ModalError from './ModalError'

function App() {
      return (
            <>
                  <Container>
                        <Navigation />
                        <Body />
                        <Footer />
                        <ModalError />
                  </Container>
            </>
      )
}

export default App
