import { useState } from 'react'
import Header from './Header/Header'
import Chart from './Chart/Chart'
import { ELE } from './constants'
import './body.scss'

const Body = () => {
      const [activeEnergy, setActiveEnergy] = useState(ELE)
      return (
            <>
                  <Header
                        activeEnergy={activeEnergy}
                        setActiveEnergy={setActiveEnergy}
                  />
                  <Chart activeEnergy={activeEnergy} />
            </>
      )
}

export default Body
