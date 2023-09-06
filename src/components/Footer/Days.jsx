import { Button, Container } from 'react-bootstrap'
import { DAYS } from '../Body/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDay } from '../../services/stateService'

const Days = ({ setShowSideBar }) => {
      const selectedDay = useSelector((state) => state.selectedDay)
      const activeEnergy = useSelector((state) => state.activeEnergy)
      const dispatch = useDispatch()

      return (
            <>
                  <Container className='d-flex align-items-center justify-content-center'>
                        {DAYS.map(({ label, value }) => {
                              return (
                                    <Button
                                          key={value}
                                          className='mx-2'
                                          variant='outline-warning'
                                          active={selectedDay === value}
                                          onClick={() => dispatch(setSelectedDay(value))}
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
