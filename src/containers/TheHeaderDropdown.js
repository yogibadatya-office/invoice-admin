import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import * as userAction from '../auth/store/actions'
import {  useHistory } from 'react-router-dom'


const TheHeaderDropdown = (props) => {
  const dispatch = useDispatch()
  let history = useHistory();

  const user = useSelector(({auth}) => auth.user)

  const handleLogout =()=>{
    dispatch(userAction.logoutUser())
    history.push('/')
    // return 
  }

  const openEditDialog =()=>{
    dispatch(userAction.openEditProfileDialog(user))
  }

  // console.log(user);
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={user.profile_pic}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        {user.name}
        </div>
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end">
        <CDropdownItem
          header
          // tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem onClick={openEditDialog}>
          {/* <CIcon name="cil-user" onClick={ev =>dispatch(userAction.openEditProfileDialog(user))} />Profile */}
          <CIcon name="cil-user"  />Profile

        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings"  /> 
          Settings
        </CDropdownItem>
        {/* <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" /> 
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" /> 
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem> */}
        <CDropdownItem divider />
        <CDropdownItem 
        onClick={handleLogout}
        >
          <CIcon name="cil-lock-locked"  /> 
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
