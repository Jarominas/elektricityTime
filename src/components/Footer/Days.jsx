import { useState } from 'react'
import { Button } from 'react-bootstrap'

const days = [
      {
            name: '1 Day',
      },
      {
            name: '2 Day',
      },
      {
            name: '3 Day',
      },
      {
            name: '4 Day',
      },
      {
            name: '5 Day',
      },
      {
            name: '6 Day',
      },
      {
            name: '7 Day',
      },
      {
            name: '8 Day',
      },
]
const Days = () => {
      const [buttonActive, isButtonActive] = useState(false)

      const handleActive = (id) => {
            isButtonActive(id)
      }
      return (
            <>
                  <div className='button-array d-flex justify-content-center gap-2 '>
                        {days.map((day, id) => {
                              return (
                                    <Button
                                          variant='outline-warning'
                                          onClick={() => handleActive(id)}
                                          active={
                                                buttonActive === id
                                                      ? true
                                                      : false
                                          }
                                          key={id}
                                    >
                                          {day.name}
                                    </Button>
                              )
                        })}
                  </div>
            </>
      )
}

export default Days
