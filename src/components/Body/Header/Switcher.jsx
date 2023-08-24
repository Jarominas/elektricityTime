import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { ELE, GAS } from '../constants'

const Switcher = ({ activeEnergy, setActiveEnergy }) => {
      return (
            <div>
                  {' '}
                  <ButtonGroup>
                        <Button
                              className='text-capitalize'
                              variant='outline-secondary'
                              onClick={() => setActiveEnergy(ELE)}
                              active={activeEnergy === ELE}
                        >
                              {ELE}
                        </Button>
                        <Button
                              className='text-capitalize'
                              variant='outline-secondary'
                              onClick={() => setActiveEnergy(GAS)}
                              active={activeEnergy === GAS}
                        >
                              {GAS}
                        </Button>
                  </ButtonGroup>
            </div>
      )
}

export default Switcher
