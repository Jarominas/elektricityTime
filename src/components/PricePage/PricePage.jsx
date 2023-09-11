import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NOW_TIMESTAMP } from '../Body/constants'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const PricePage = () => {
      const electricityPrice = useSelector((state) => state.electricityPrice)
      const estGasLatest = useSelector((state) => state.estGasLatest)
      const [currentElectricity, setCurrentElectricity] = useState(null)

      console.log(electricityPrice)

      // useEffect is a hook that starts after component ends his render.
      // It takes two arguments :
      // 1.Function that must be started
      // 2.Array of dependencys
      // Use effect controls this dependecys and when they changes restart function.
      // useEffect we use to recive data inside component to have control of that data to remove rerenders.

      useEffect(() => {
            if (!electricityPrice) {
                  return
            }
            const data = electricityPrice.ee.find((item) => item.timestamp === NOW_TIMESTAMP)
            setCurrentElectricity(data?.price || null)
      }, [electricityPrice])
      return (
            <section className='d-flex flex-column justify-content-center m-3 gap-5 vh-100 align-items-center'>
                  <div className='d-flex gap-5'>
                        <div>
                              <h5>Elektricity price</h5>
                              <h2>{currentElectricity}</h2>
                              <p>sents/kw</p>
                        </div>
                        <div>
                              <h5>Gas price</h5>
                              <h2>{parseFloat(estGasLatest).toFixed(2)}</h2>
                              <p>euro/MWh</p>
                        </div>
                  </div>
                  <div className='d-flex gap-3'>
                        <Link to={'/'}>
                              <Button>Back to Home</Button>
                        </Link>
                        <Link to={'/pricepage/km'}>
                              <Button>Add Tax 20%</Button>
                        </Link>
                  </div>
            </section>
      )
}

export default PricePage
