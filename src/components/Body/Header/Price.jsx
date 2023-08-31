import { useEffect, useState } from 'react'
import { NOW_TIMESTAMP } from '../constants'

const Price = ({ electricityPrice }) => {
      const [currentPrice, setCurrentPrice] = useState(0)

      useEffect(() => {
            if (!electricityPrice) return
            const { price } = electricityPrice.ee.find((item) => item.timestamp === NOW_TIMESTAMP)
            setCurrentPrice(price)
      }, [electricityPrice])

      return (
            <>
                  <div className='price'>{currentPrice}</div>
                  <p>sents/kw</p>
            </>
      )
}

export default Price
