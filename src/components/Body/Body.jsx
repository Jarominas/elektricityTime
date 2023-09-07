import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header/Header'
import Chart from './Chart/Chart'
import { useSelector } from 'react-redux'
import { ELE } from './constants'
import PriceTable from './PriceTable/PriceTable'
import { useDispatch } from 'react-redux'
import './body.scss'

const Body = () => {
      const activeChart = useSelector((state) => state.activeChart)

      const [activePriceTable, setActivePriceTable] = useState(false)

      const handleChart = () => {
            setActivePriceTable(false)
      }

      const handlePriceTable = () => {
            setActivePriceTable(true)
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
