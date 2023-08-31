import './app.scss'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Body from './components/Body/Body'
import Footer from './components/Footer'
import { DAYS, ELE } from './components/Body/constants'

function App() {
      const [selectedDay, setSelectedDay] = useState(DAYS[0].value)
      const [activeChart, setActiveChart] = useState(true)
      const [activeEnergy, setActiveEnergy] = useState(ELE)
      return (
            <>
                  <Container>
                        <Navigation />
                        <Body
                              selectedDay={selectedDay}
                              setSelectedDay={setSelectedDay}
                              activeChart={activeChart}
                              setActiveChart={setActiveChart}
                              activeEnergy={activeEnergy}
                              setActiveEnergy={setActiveEnergy}
                        />
                        <Footer
                              selectedDay={selectedDay}
                              setSelectedDay={setSelectedDay}
                              activeEnergy={activeEnergy}
                              setActiveEnergy={setActiveEnergy}
                        />
                  </Container>
            </>
      )
}

export default App
