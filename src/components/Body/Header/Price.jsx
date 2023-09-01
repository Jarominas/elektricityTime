import { useEffect, useState } from 'react'
import { NOW_TIMESTAMP, ELE, GAS } from '../constants'
import moment from 'moment'

const Price = ({ electricityPrice, activeEnergy, estGasLatest }) => {
      const [currentPrice, setCurrentPrice] = useState(null)

      useEffect(() => {
            if (!electricityPrice || !estGasLatest) return

            const prices = {
                  [ELE]: {
                        data: electricityPrice.ee,
                  },
                  [GAS]: {
                        data: estGasLatest.data,
                  },
            }

            const data = prices[activeEnergy].data.map((dataItem) => ({
                  ...dataItem,
            }))

            setCurrentPrice(data)
            console.log('GAS OR ELE DATA', data)
      }, [electricityPrice, estGasLatest, activeEnergy])
      return (
            <>
                  {currentPrice &&
                        currentPrice.map((priceItem) => (
                              <div className='price' key={priceItem.timestamp}>
                                    {activeEnergy === ELE && NOW_TIMESTAMP === priceItem.timestamp
                                          ? priceItem.price
                                          : activeEnergy === GAS && priceItem.price}
                              </div>
                        ))}

                  <p>{activeEnergy === ELE ? 'sents/kw' : 'euro/MWh'}</p>
            </>
      )
}

export default Price
