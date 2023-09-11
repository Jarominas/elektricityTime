import { useState } from 'react'
import Days from './Days'

import SideBar from './SideBar'

const Footer = (props) => {
      // useState is a hook that inicialize component state.
      // useState return array of 2 elements:
      // 1. Value that keep info inside
      // 2.Function that change this info
      // When function start and state changes, component start rerender
      const [showSideBar, setShowSideBar] = useState(false)
      return (
            <>
                  <Days setShowSideBar={setShowSideBar} {...props} />
                  <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} {...props} />
            </>
      )
}

export default Footer
