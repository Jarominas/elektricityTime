import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const days = [
      {
            label: '1 Day',
      },
      {
            label: '2 Day',
      },
      {
            label: '3 Day',
      },
      {
            label: '4 Day',
      },
      {
            label: '5 Day',
      },
      {
            label: '6 Day',
      },
      {
            label: '7 Day',
      },
      {
            label: '8 Day',
      },
]
const Days = ({ setShowSideBar }) => {
      const [buttonActive, isButtonActive] = useState(0)

      const handlerActive = (id) => {
            isButtonActive(id)
      }
      return (
            <>
                  <Container className='d-flex align-items-center justify-content-center'>
                        {days.map((day, id) => {
                              return (
                                    <Button
                                          key={id}
                                          className='mx-2'
                                          variant='outline-warning'
                                          onClick={() => handlerActive(id)}
                                          active={
                                                buttonActive === id
                                                      ? true
                                                      : false
                                          }
                                    >
                                          {day.label}
                                    </Button>
                              )
                        })}
                        <Button
                              className='mx-2'
                              variant='outline-warning'
                              onClick={() => setShowSideBar(true)}
                        >
                              Choose Date
                        </Button>
                  </Container>
            </>
      )
}

export default Days
