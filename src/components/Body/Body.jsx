import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header/Header'
import Chart from './Chart/Chart'

import { ELE } from './constants'
import './body.scss'
import PriceTable from './PriceTable/PriceTable'

const Body = () => {
      const [activeEnergy, setActiveEnergy] = useState(ELE)
      const [activeChart, setActiveChart] = useState(true)
      const [activePriceTable, setActivePriceTable] = useState(false)

      const handleChart = () => {
            setActiveChart(true)
            setActivePriceTable(false)
      }

      const handlePriceTable = () => {
            setActivePriceTable(true)
            setActiveChart(false)
      }
      return (
            <>
                  <Header
                        activeEnergy={activeEnergy}
                        setActiveEnergy={setActiveEnergy}
                  />
                  {activeChart && <Chart activeEnergy={activeEnergy} />}
                  {activePriceTable && <PriceTable />}

                  <Button
                        className='mx-2'
                        variant='outline-info'
                        onClick={() => handleChart()}
                        active={activeChart}
                  >
                        Chart
                  </Button>
                  <Button
                        variant='outline-info'
                        onClick={() => handlePriceTable()}
                        active={activePriceTable}
                  >
                        Price Table
                  </Button>
            </>
      )
}

export default Body
