import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { ELE, GAS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveEnergy } from '../../../services/stateService'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Switcher = () => {
      const activeEnergy = useSelector((state) => state.activeEnergy)
      const dispatch = useDispatch()
      const { pathname } = useLocation()
      const navigate = useNavigate()

      useEffect(() => {
            if (pathname === '/gas') {
                  dispatch(setActiveEnergy(GAS))
                  navigate('/gas')
            } else {
                  dispatch(setActiveEnergy(ELE))
            }
      }, [pathname])
      return (
            <div>
                  {' '}
                  <ButtonGroup>
                        <Button
                              className='text-capitalize'
                              variant='outline-secondary'
                              onClick={() => navigate('/electricity')}
                              active={activeEnergy === ELE}
                        >
                              {ELE}
                        </Button>
                        <Button
                              className='text-capitalize'
                              variant='outline-secondary'
                              onClick={() => navigate('/gas')}
                              active={activeEnergy === GAS}
                        >
                              {GAS}
                        </Button>
                  </ButtonGroup>
            </div>
      )
}

export default Switcher
