import { useEffect, useState } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap'
import Header from './Header/Header'
import Chart from './Chart/Chart'
import ModalError from './ModalError/ModalError'
import { ELE } from './constants'
import PriceTable from './PriceTable/PriceTable'
import { getElectricityPrice, getGasPrice, getLatestEstGasPrice } from '../../services/apiServe'
import './body.scss'

const Body = ({
      selectedDay,
      activeEnergy,
      setActiveEnergy,
      setActiveChart,
      activeChart,
      electricityPrice,
      setElectricityPrice,
      gasPrice,
      setGasPrice,
      estGasLatest,
      setEstGasLatest,
}) => {
      const [activePriceTable, setActivePriceTable] = useState(false)
      const [errorMessage, setErrorMessage] = useState(null)

      useEffect(() => {
            // ELECTRICITY PRICE
            getElectricityPrice({ selectedDay })
                  .then((data) => {
                        console.log('electricity', data)
                        if (!data.success) {
                              throw data.messages
                        }
                        setElectricityPrice(data.data)
                  })
                  .catch(setErrorMessage)

            // GAS PRICE
            getGasPrice({ selectedDay })
                  .then((data) => {
                        console.log('gas', data)
                        if (!data.success) {
                              throw new Error(data.messages)
                        }
                        setGasPrice(data.data)
                  })
                  .catch(setErrorMessage)
      }, [selectedDay, setGasPrice, setElectricityPrice])

      // ESTONIAN LATEST GAS PRICE
      useEffect(() => {
            getLatestEstGasPrice()
                  .then((data) => {
                        setEstGasLatest(data.data[0].price)
                        console.log('estLatest', data)
                  })
                  .catch(setErrorMessage)
      }, [setEstGasLatest])

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
                        electricityPrice={electricityPrice}
                        estGasLatest={estGasLatest}
                  />
                  {activeChart && <Chart activeEnergy={activeEnergy} electricityPrice={electricityPrice} gasPrice={gasPrice} />}
                  {activePriceTable && (
                        <PriceTable electricityPrice={electricityPrice} gasPrice={gasPrice} activeEnergy={activeEnergy} />
                  )}
                  <Button className='mx-2' variant='outline-info' onClick={() => handleChart()} active={activeChart}>
                        Chart
                  </Button>
                  <Button variant='outline-info' onClick={() => handlePriceTable()} active={activePriceTable}>
                        Price Table
                  </Button>
                  <ModalError errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
            </>
      )
}

export default Body
