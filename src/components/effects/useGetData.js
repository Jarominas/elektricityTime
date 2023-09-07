import { useEffect } from 'react'
import { getElectricityPrice, getLatestEstGasPrice, getGasPrice } from '../../services/apiServe'
import { setGasPrice, setElectricityPrice, setEstGasLatest, setErrorMessage } from '../../services/stateService'
import { useDispatch, useSelector } from 'react-redux'

const useGetData = () => {
      const selectedDay = useSelector((state) => state.selectedDay)
      const dispatch = useDispatch()
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
}

export default useGetData
