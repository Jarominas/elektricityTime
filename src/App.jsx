import './app.scss'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Body from './components/Body/Body'
import Footer from './components/Footer'
import { DAYS } from './components/Body/constants'

function App() {
      const [selectedDay, setSelectedDay] = useState(DAYS[0].value)
      return (
            <>
                  <Container>
                        <Navigation />
                        <Body
                              selectedDay={selectedDay}
                              setSelectedDay={setSelectedDay}
                        />
                        <Footer
                              selectedDay={selectedDay}
                              setSelectedDay={setSelectedDay}
                        />
                  </Container>
            </>
      )
}

export default App
