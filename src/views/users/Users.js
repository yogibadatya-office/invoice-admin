import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import withReducer from '../../store/withReducer'
import axios from 'axios'
import constants from '../../fuse-configs/constants'


import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'
import * as Actions from './store/actions'
import reducer from './store/reducers'


const Users = () => {
  const dispatch = useDispatch()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const [userList, setUserList] = useState([])
  console.log("userlist ", userList);

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
    const request = axios.get(`${constants.API_URL}/getCustomers`)
    request.then((response) => {
      setUserList(response.data.data)
    }).catch(error => {
      console.log(error)
    })

    dispatch(Actions.getCustomers)
  }, [currentPage, page, dispatch])

  const fields = [
    { key: 'name', _style: { width: '20%' } },
    // 'registered',
    { key: 'email', _style: { width: '20%' } },
    {
      key: 'dial_code', _style: { width: '20%' },
      sorter: false,
      filter: false
    },
    {
      key: 'mobile_no',
      // label: '',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    },
    {
      key: 'profile_pic',
      // label: '',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    }
  ]


  return (
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader>
            Users
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
            {/* <CDataTable
            items={userList}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'email','dial_code', 'mobile_no', 'profile_pic'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/users/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          /> */}
            <CDataTable
              items={userList}
              fields={fields}
              // columnFilter
              tableFilter
              // footer
              itemsPerPageSelect
              itemsPerPage={5}
              // onRowClick={(item) => history.push(`/users/${item.id}`)}
              hover
              sorter
              pagination
              scopedSlots={{
                'profile_pic':
                  (item) => (
                    <td>
                      <image height="50px" width="50px" src={item.profile_pic} alt="profile pic">
                        {/* {item} */}
                      </image>
                    </td>
                  ),
                // 'show_details':
                //   (item, index)=>{
                //     return (
                //       <td className="py-2">
                //         <CButton
                //           color="primary"
                //           variant="outline"
                //           shape="square"
                //           size="sm"
                //           onClick={()=>{toggleDetails(index)}}
                //         >
                //           {details.includes(index) ? 'Hide' : 'Show'}
                //         </CButton>
                //       </td>
                //       )
                //   },
                // 'details':
                //     (item, index)=>{
                //       return (
                //       <CCollapse show={details.includes(index)}>
                //         <CCardBody>
                //           <h4>
                //             {item.username}
                //           </h4>
                //           <p className="text-muted">User since: {item.registered}</p>
                //           <CButton size="sm" color="info">
                //             User Settings
                //           </CButton>
                //           <CButton size="sm" color="danger" className="ml-1">
                //             Delete
                //           </CButton>
                //         </CCardBody>
                //       </CCollapse>
                //     )
                //   }
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default withReducer('UserApp', reducer)(Users)
