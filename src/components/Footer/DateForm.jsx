import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function DateForm() {
      return (
            <Form>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>From</Form.Label>
                        <Form.Control type='date' />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>To</Form.Label>
                        <Form.Control type='date' />
                  </Form.Group>
                  <Button variant='warning' type='submit'>
                        Search
                  </Button>
            </Form>
      )
}

export default DateForm
