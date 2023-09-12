import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { getGasPrice, getLatestEstGasPrice, getElectricityPrice } from '../../services/apiServe'
import { setElectricityPrice, setGasPrice, setEstGasLatest, setErrorMessage } from '../../services/stateService'
import { useDispatch } from 'react-redux'

function DateForm({ hideSideBar }) {
      const dispatch = useDispatch()
      const handleSubmit = async (event) => {
            event.preventDefault()

            const from = event.target.from.value
            const to = event.target.to.value

            try {
                  const [dataEle, dataGas] = await Promise.all([getElectricityPrice({ to, from }), getGasPrice({ to, from })])
                  if (![dataEle, dataGas].find((data) => data.success)) {
                        throw (dataEle || dataGas).messages[0]
                  }
                  dispatch(setElectricityPrice(dataEle.data))
                  dispatch(setGasPrice(dataGas.data))

                  const dataLatest = await getLatestEstGasPrice({ to, from })
                  if (!dataLatest.success) {
                        throw dataLatest.messages
                  }
                  dispatch(setEstGasLatest(dataLatest.data[0].price))
            } catch (error) {
                  console.log(error)
                  dispatch(setErrorMessage(error))
            } finally {
                  hideSideBar()
            }

            console.log(from, to)
      }

      return (
            <>
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                              <Form.Label>From</Form.Label>
                              <Form.Control type='date' name='from' required />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                              <Form.Label>To</Form.Label>
                              <Form.Control type='date' name='to' />
                        </Form.Group>
                        <Button variant='warning' type='submit'>
                              Search
                        </Button>
                  </Form>
            </>
      )
}

export default DateForm
