import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Contact = () => {
      return (
            <>
                  <div>
                        Created by Artur Jarominas{' '}
                        <Link to='http://github.com/jarominas' target='_blank'>
                              GitHub
                        </Link>
                  </div>
                  <Link to={'/'}>
                        <Button variant='primary'>Back to Home Page</Button>
                  </Link>
            </>
      )
}

export default Contact
