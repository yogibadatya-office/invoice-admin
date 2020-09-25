import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import withReducer from '../../store/withReducer'
import axios from 'axios'
import constants from '../../fuse-configs/constants'
// import * as Actions from './store/actions'


import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCollapse,
} from '@coreui/react'
import * as Actions from './store/actions'
import reducer from './store/reducers'
import OrderDetails from './modal/OrderDetails'

const BusinessDetails = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  // const localUrl = 'http://localhost:3004/pics/'
  const localUrl = 'http://116.72.16.200:3004/pics/'

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }
  const [userList, setUserList] = useState([])
  console.log("userlist ", userList);

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
    const request = axios.get(`${constants.API_URL}/getBusinessProfileDetails`)
    request.then((response) => {
      setUserList(response.data.data)
    }).catch(error => {
      console.log(error)
      //dispatch(showMessage({message: error.response.data.message}))

    })

    dispatch(Actions.getCustomers)
  }, [currentPage, page, dispatch])

  const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  // const openOrderDialog =(id)=>{
  //   dispatch(Actions.openOrderDetailsDialog(id))
  // }


  const fields = [
    { key: 'businessName', _style: { width: '20%' } },
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
      key: 'serviceCategory',
      // label: '',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    },
    {
      key: 'businessProfilePic',
      // label: '',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    },
    {
      key: 'orderList',
      // label: '',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    }
  ]


  return (
    <>
      <OrderDetails/>
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader>
            Business Details
            {/* <small className="text-muted"> example</small> */}
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
                'businessProfilePic':
                  (item) => (
                    <td>
                      {/* http://116.72.16.200:3004/pics/0aaf89f18f8a51008b18030f7ddc17d7.png */}
                      {/* http://localhost:3004/pics/0aaf89f18f8a51008b18030f7ddc17d7.png */}
                      {/* if server api is use then change localUrl to serverUrl  */}
                      {/* <img src="https://img.icons8.com/ios/50/000000/small-business.png"/> */}
                      <img height="50px" width="50px" src={item.businessProfilePic==""?'https://img.icons8.com/ios/50/000000/small-business.png':localUrl+item.businessProfilePic} alt="Business image">
                      {/* {item} */}
                      </img>
                    </td>
                  ),
                  // 'serviceCategory':
                  // (item) => (
                  //   <td>
                  //     <text>{item.serviceCategory[0].serviceCategoryName}</text>
                  //   </td>
                  // ),
                  'orderList':
                  (item) => (
                    <td> 
                      <CButton size="sm" color="primary"onClick={ev => dispatch(Actions.openOrderDetailsDialog(item._id))} className="ml-1">
                            See Order Details
                          </CButton>                     
                    </td>
                  ),
                'serviceCategory':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={()=>{toggleDetails(index)}}
                        >
                          {details.includes(index) ? 'Hide' : 'Show'}
                        </CButton>
                      </td>
                      )
                  },
                'details':
                    (item, index)=>{
                      return (
                      <CCollapse show={details.includes(index)}>
                        <CCardBody>
                          {/* <h4>
                            {item.serviceCategory[0].serviceCategoryName}
                          </h4> */}
                          <p className="text-muted">Service Category Name:  <b>{item.serviceCategory[0].serviceCategoryName}</b></p>
                          <p className="text-muted">Service Category Image: <img height="50px" width="50px" alt="Service image" src= {localUrl+item.serviceCategory[0].serviceCategoryIcon}></img></p>

                          {/* <CButton size="sm" color="info">
                            User Settings
                          </CButton>
                          <CButton size="sm" color="danger" className="ml-1">
                            Delete
                          </CButton> */}
                        </CCardBody>
                      </CCollapse>
                    )
                  }
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default withReducer('BusinessApp', reducer)(BusinessDetails)
