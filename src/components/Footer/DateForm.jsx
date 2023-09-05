import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ModalError from '../Body/ModalError/ModalError'
import { getElectricityPrice, getGasPrice, getLatestEstGasPrice } from '../../services/apiServe'

function DateForm({ setElectricityPrice, setGasPrice, setEstGasLatest, hideSideBar }) {
      const [errorMessage, setErrorMessage] = useState(null)
      const handleSubmit = async (event) => {
            event.preventDefault()

            const from = event.target.from.value
            const to = event.target.to.value

            try {
                  const [dataEle, dataGas] = await Promise.all([getElectricityPrice({ to, from }), getGasPrice({ to, from })])
                  console.log('NEW DATA', dataEle, dataGas)
                  if (![dataEle, dataGas].find((data) => data.success)) {
                        throw (dataEle || dataGas).messages[0]
                  }
                  setElectricityPrice(dataEle.data)
                  setGasPrice(dataGas.data)

                  const dataLatest = await getLatestEstGasPrice({ to, from })
                  if (!dataLatest.success) {
                        throw dataLatest.messages
                  }
                  setEstGasLatest(dataLatest.data[0].price)
                  console.log('from DATA FORM', dataLatest.data[0].price)
            } catch (error) {
                  console.log(error)
                  // setErrorMessage(error)
            }

            console.log(from, to)
            hideSideBar()
      }

      return (
            <>
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                              <Form.Label>From</Form.Label>
                              <Form.Control type='date' name='from' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                              <Form.Label>To</Form.Label>
                              <Form.Control type='date' name='to' />
                        </Form.Group>
                        <Button variant='warning' type='submit'>
                              Search
                        </Button>
                  </Form>
                  <ModalError errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
            </>
      )
}

export default DateForm
