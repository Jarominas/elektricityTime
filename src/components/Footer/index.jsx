import { useState } from 'react'
import Days from './Days'

import SideBar from './SideBar'

const Footer = (props) => {
      const [showSideBar, setShowSideBar] = useState(false)
      return (
            <>
                  <Days setShowSideBar={setShowSideBar} {...props} />
                  <SideBar
                        show={showSideBar}
                        handleClose={() => setShowSideBar(false)}
                  />
            </>
      )
}

export default Footer
