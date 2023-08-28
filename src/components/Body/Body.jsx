import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header/Header'
import Chart from './Chart/Chart'

import { ELE } from './constants'
import './body.scss'
import PriceTable from './PriceTable/PriceTable'
import { getElectricityPrice, getGasPrice } from '../../services/apiServe'

const Body = ({ selectedDay }) => {
      const [activeEnergy, setActiveEnergy] = useState(ELE)
      const [activeChart, setActiveChart] = useState(true)
      const [activePriceTable, setActivePriceTable] = useState(false)
      const [electricityPrice, setElectricityPrice] = useState(null)
      const [gasPrice, setGasPrice] = useState(null)

      useEffect(() => {
            getElectricityPrice(selectedDay).then((data) => {
                  console.log('electricity', data)
                  setElectricityPrice(data.data)
            })
            getGasPrice(selectedDay).then((data) => {
                  console.log('gas', data)
                  setGasPrice(data.data)
            })
      }, [selectedDay])

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
                  {activeChart && (
                        <Chart
                              activeEnergy={activeEnergy}
                              electricityPrice={electricityPrice}
                              gasPrice={gasPrice}
                        />
                  )}
                  {activePriceTable && (
                        <PriceTable
                              electricityPrice={electricityPrice}
                              gasPrice={gasPrice}
                        />
                  )}

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
