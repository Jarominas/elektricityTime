import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const elek = 'elektricity'
const gas = 'gaas'
const Switcher = () => {
      const [activeButton, setActiveButton] = useState(elek)

      return (
            <div>
                  {' '}
                  <ButtonGroup>
                        <Button
                              variant='outline-secondary'
                              onClick={() => setActiveButton(elek)}
                              active={activeButton === elek}
                        >
                              Elektricity
                        </Button>
                        <Button
                              variant='outline-secondary'
                              onClick={() => setActiveButton(gas)}
                              active={activeButton === gas}
                        >
                              Gaas
                        </Button>
                  </ButtonGroup>
            </div>
      )
}

export default Switcher
