import './app.scss'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Body from './components/Body/Body'
import Footer from './components/Footer'
import ModalError from './ModalError'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contacts'
import useGetData from './components/effects/useGetData'
import PricePage from './components/PricePage/PricePage'

// Component is a function, that return one element and only one.
// Components starts from Capitalize, thats why we can difference than from Elements in JSX
// JSX its a new syntax you can write NodeJs inside HTML
function App() {
      useGetData()

      const mainPage = (
            <>
                  <Body />
                  <Footer />
            </>
      )

      // links in react router dom are called Route
      // every route has it own path and element that must be started
      // when link is changed component that was rendered , react router dom start UNMOUNT of this component
      // and to other component he start MOUNT
      // we can give all kind of info to components with Links, its called search params.
      // Classic view: http://google.com?dataType=ele
      //with react router dom we can create readable links with '/' and give info that we need. ex: http://google.com/ele
      // value of ELE will be writed with :{paramName}
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
                              {/* <Route path='/pricepage/km' element={<TaxPricePage />} /> */}
                        </Routes>
                        <ModalError />
                  </Container>
            </>
      )
}

export default App
