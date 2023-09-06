/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { NOW_TIMESTAMP, ELE } from '../constants'
import { useSelector } from 'react-redux'
const Price = () => {
      const electricityPrice = useSelector((state) => state.electricityPrice)
      const estGasLatest = useSelector((state) => state.estGasLatest)
      const activeEnergy = useSelector((state) => state.activeEnergy)

      const [currentPrice, setCurrentPrice] = useState(null)

      useEffect(() => {
            if (!electricityPrice) {
                  console.log('No data in Price')
                  return
            }
            const data = electricityPrice.ee.find((item) => item.timestamp === NOW_TIMESTAMP)
            setCurrentPrice(data?.price || null)
      }, [electricityPrice, activeEnergy, estGasLatest])
      console.log('GET CURRENT ELE PRICE', currentPrice)
      return (
            <>
                  <h2>{activeEnergy === ELE ? currentPrice : parseFloat(estGasLatest).toFixed(2)}</h2>
                  <p>{activeEnergy === ELE ? 'sents/kw' : 'euro/MWh'}</p>
            </>
      )
}

export default Price
