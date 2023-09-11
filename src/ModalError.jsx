import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMessage } from './services/stateService'

const ModalError = () => {
      // useSelector is hook that listen state that we give him
      // when changed, component restarts.
      const errorMessage = useSelector((state) => state.errorMessage)

      // Dispatch send action to redux. He accept action and send it to redux with new values and info.
      const dispatch = useDispatch()
      const handleClose = () => dispatch(setErrorMessage(null))
      return (
            <Modal show={!!errorMessage} onHide={handleClose}>
                  <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{errorMessage}</Modal.Body>
                  <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                              Close
                        </Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default ModalError
