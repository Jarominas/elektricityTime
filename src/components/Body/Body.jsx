import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header/Header'
import Chart from './Chart/Chart'
import { useSelector } from 'react-redux'
import { ELE } from './constants'
import PriceTable from './PriceTable/PriceTable'
import { getElectricityPrice, getGasPrice, getLatestEstGasPrice } from '../../services/apiServe'
import { setElectricityPrice, setGasPrice, setActiveChart, setEstGasLatest, setErrorMessage } from '../../services/stateService'
import { useDispatch } from 'react-redux'
import './body.scss'

const Body = () => {
      const activeChart = useSelector((state) => state.activeChart)
      const selectedDay = useSelector((state) => state.selectedDay)
      const dispatch = useDispatch()

      const [activePriceTable, setActivePriceTable] = useState(false)

      useEffect(() => {
            // ELECTRICITY PRICE
            getElectricityPrice({ selectedDay })
                  .then((data) => {
                        console.log('electricity', data)
                        if (!data.success) {
                              throw data.messages
                        }
                        dispatch(setElectricityPrice(data.data))
                  })
                  .catch((error) => dispatch(setErrorMessage(error)))

            // GAS PRICE
            getGasPrice({ selectedDay })
                  .then((data) => {
                        console.log('gas', data)
                        if (!data.success) {
                              throw new Error(data.messages)
                        }
                        dispatch(setGasPrice(data.data))
                  })
                  .catch((error) => dispatch(setErrorMessage(error)))
      }, [selectedDay, setGasPrice, dispatch])

      // ESTONIAN LATEST GAS PRICE
      useEffect(() => {
            getLatestEstGasPrice()
                  .then((data) => {
                        dispatch(setEstGasLatest(data.data[0].price))
                        console.log('estLatest', data)
                  })
                  .catch((error) => dispatch(setErrorMessage(error)))
      }, [setEstGasLatest])

      const handleChart = () => {
            dispatch(setActiveChart(true))
            setActivePriceTable(false)
      }

      const handlePriceTable = () => {
            setActivePriceTable(true)
            dispatch(setActiveChart(false))
      }
      return (
            <>
                  <Header />

                  {!activePriceTable ? <Chart /> : <PriceTable />}
                  <Button className='mx-2' variant='outline-info' onClick={() => handleChart()} active={activeChart}>
                        Chart
                  </Button>
                  <Button variant='outline-info' onClick={() => handlePriceTable()} active={activePriceTable}>
                        Price Table
                  </Button>
            </>
      )
}

export default Body
