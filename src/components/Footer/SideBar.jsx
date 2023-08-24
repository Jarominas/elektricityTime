import { Offcanvas } from 'react-bootstrap'
import DateForm from './DateForm'

const SideBar = ({ show, handleClose }) => {
      return (
            <div>
                  <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title>Date Search</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              <DateForm />
                        </Offcanvas.Body>
                  </Offcanvas>
            </div>
      )
}

export default SideBar
