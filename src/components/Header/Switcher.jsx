import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Switcher = () => {
      const [activeButton, setActiveButton] = useState(true)

      return (
            <div>
                  {' '}
                  <ButtonGroup>
                        <Button
                              variant='outline-secondary'
                              onClick={() => setActiveButton()}
                              active={activeButton === true}
                        >
                              Elektricity
                        </Button>
                        <Button
                              variant='outline-secondary'
                              onClick={() => setActiveButton()}
                              active={activeButton === false}
                        >
                              Gaas
                        </Button>
                  </ButtonGroup>
            </div>
      )
}

export default Switcher
