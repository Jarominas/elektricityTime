import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Contact = () => {
      return (
            <>
                  <div className='d-flex flex-column align-items-center gap-4 justify-content-center vh-100'>
                        <div>
                              <h3>Created by Artur Jarominas while studying at Gamma Intelligence.</h3>
                              <Link to='http://github.com/jarominas' target='_blank'>
                                    <h3>GitHub.com/Jarominas</h3>
                              </Link>
                        </div>
                        <Link to={'/'}>
                              <Button variant='primary'>Back to Home Page</Button>
                        </Link>
                  </div>
            </>
      )
}

export default Contact
