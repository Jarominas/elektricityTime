import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalError = ({ errorMessage, handleClose }) => {
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
