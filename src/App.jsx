import './App.scss'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Body from './components/Body/Body'
import Footer from './components/Footer'
import ModalError from './ModalError'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contacts'
import useGetData from './components/effects/useGetData'
import PricePage from './components/PricePage/PricePage'
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
                              <Route path='/pricepage' element={<PricePage />} />
                              <Route path='/pricepage/km' element={<PricePage km />} />
                        </Routes>
                        <ModalError />
                  </Container>
            </>
      )
}

export default App
