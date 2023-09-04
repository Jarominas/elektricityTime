import { useEffect, useState } from 'react'
import { NOW_TIMESTAMP, ELE, GAS } from '../constants'

const Price = ({ electricityPrice, activeEnergy, estGasLatest }) => {
      const [currentGas, setCurrentGas] = useState(null)
      const [currentElectricity, setCurrentElectricity] = useState(null)

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

            if (activeEnergy === ELE) {
                  setCurrentElectricity(data || null)
            } else if (activeEnergy === GAS) {
                  setCurrentGas(data || null)
            }

            console.log('GAS OR ELE DATA', data)
      }, [electricityPrice, estGasLatest, activeEnergy])
      return (
            <>
                  {(activeEnergy === ELE ? currentElectricity : currentGas) &&
                        (activeEnergy === ELE ? currentElectricity : currentGas).map((priceItem) => (
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
