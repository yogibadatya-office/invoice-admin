import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="www.technobrigadeinfotech.com" target="_blank" rel="noopener noreferrer">InvoiceApp</a>
        <span className="ml-1">&copy; 2020 Techno-Brigade.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Created by</span>
        <a href="www.technobrigadeinfotech.com" target="_blank" rel="noopener noreferrer">Yogesh Badatya</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
