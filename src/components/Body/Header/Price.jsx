/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { NOW_TIMESTAMP, ELE } from '../constants'

const Price = ({ electricityPrice, activeEnergy, estGasLatest }) => {
      const [currentPrice, setCurrentPrice] = useState(0)

      useEffect(() => {
            if (!electricityPrice) return
            const data = electricityPrice.ee.find((item) => item.timestamp === NOW_TIMESTAMP)
            setCurrentPrice(data?.price || 0)
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
