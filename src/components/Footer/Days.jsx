import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { DAYS } from '../Body/constants'

const Days = ({ setShowSideBar, selectedDay, setSelectedDay, activeEnergy }) => {
      // const handlerActive = (id) => {
      //       setSelectedDay(id)
      // }
      return (
            <>
                  <Container className='d-flex align-items-center justify-content-center'>
                        {DAYS.map(({ label, value }) => {
                              return (
                                    <Button
                                          key={value}
                                          className='mx-2'
                                          variant='outline-warning'
                                          onClick={() => setSelectedDay(value)}
                                          active={selectedDay === value ? true : false}
                                    >
                                          {value}
                                          {label[activeEnergy]}
                                    </Button>
                              )
                        })}
                        <Button className='mx-2' variant='outline-warning' onClick={() => setShowSideBar(true)}>
                              Choose Date
                        </Button>
                  </Container>
            </>
      )
}

export default Days
