import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { ELE, GAS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveEnergy } from '../../../services/stateService'

const Switcher = () => {
      const activeEnergy = useSelector((state) => state.activeEnergy)
      const dispatch = useDispatch()
      return (
            <div>
                  {' '}
                  <ButtonGroup>
                        <Button
                              className='text-capitalize'
                              variant='outline-secondary'
                              onClick={() => dispatch(setActiveEnergy(ELE))}
                              active={activeEnergy === ELE}
                        >
                              {ELE}
                        </Button>
                        <Button
                              className='text-capitalize'
                              variant='outline-secondary'
                              onClick={() => dispatch(setActiveEnergy(GAS))}
                              active={activeEnergy === GAS}
                        >
                              {GAS}
                        </Button>
                  </ButtonGroup>
            </div>
      )
}

export default Switcher
