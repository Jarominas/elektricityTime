import './app.scss'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Body from './components/Body/Body'
import Footer from './components/Footer'
import ModalError from './ModalError'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contacts'
import useGetData from './components/effects/useGetData'
function App() {
      useGetData()

      const mainPage = (
            <>
                  <Body />
                  <Footer />
            </>
      )
      return (
            <>
                  <Container>
                        <Navigation />
                        <Routes>
                              <Route path='/' element={mainPage} />
                              <Route path='/gas' element={mainPage} />
                              <Route path='/gas/:dataType' element={mainPage} />
                              <Route path='/electricity' element={mainPage} />
                              <Route path='/contacts' element={<Contact />} />
                        </Routes>
                        <ModalError />
                  </Container>
            </>
      )
}

export default App
