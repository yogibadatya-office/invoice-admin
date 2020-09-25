import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import withReducer from '../../store/withReducer'
import axios from 'axios'
import constants from '../../fuse-configs/constants'
// import * as Actions from './store/actions'
import moment from 'moment'


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
// import * as Actions from './store/actions'
// import reducer from './store/reducers'
// import OrderDetails from './modal/OrderDetails'

const SubscriptionList = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const localUrl = 'http://localhost:3004/pics/'
  const serverUrl = 'http://116.72.16.200:3004/pics/'

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }
  const [subscriptionList, setsubscriptionList] = useState([])


  useEffect(() => {
    currentPage !== page && setPage(currentPage)
    const request = axios.get(`${constants.API_URL}/getAllSubscriptions`)
    request.then((response) => {
        setsubscriptionList(response.data.data)
    }).catch(error => {
      console.log(error)
      //dispatch(showMessage({message: error.response.data.message}))

    })
  }, [currentPage, page, dispatch])


  const fields = [
    {
      key: 'businessProfilePic',
      // label: '',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    },
    { key: 'businessName', _style: { width: '20%' } },
    // 'registered',
    { key: 'ownerName', _style: { width: '20%' } },
    {
      key: 'subscriptionAmt', _style: { width: '20%' },
      sorter: false,
      filter: false
    },
    { key: 'subscriptionFrom', _style: { width: '20%' } },
    { key: 'subscriptionTo', _style: { width: '20%' } },
    {
      key: 'subscriptionType',
      // label: '',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    },
    // {
    //   key: 'serviceCategory',
    //   // label: '',
    //   _style: { width: '20%' },
    //   sorter: false,
    //   filter: false
    // },
    // {
    //   key: 'businessId.businessProfilePic',
    //   // label: '',
    //   _style: { width: '20%' },
    //   sorter: false,
    //   filter: false
    // },
    // {
    //   key: 'orderList',
    //   // label: '',
    //   _style: { width: '20%' },
    //   sorter: false,
    //   filter: false
    // }
  ]


  return (
    <>
      {/* <OrderDetails/> */}
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader>
          <b>Subscriber List</b>
            {/* <small className="text-muted"> example</small>                items={subscriptionList}*/}
          </CCardHeader>
          <CCardBody>
          <CDataTable
              items={subscriptionList}
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
                      <img height="50px" width="50px" src={localUrl+item.businessId[0].businessProfilePic} alt="Business image">
                      {/* {item} */}
                      </img>
                    </td>
                  ),                  
                  'businessName':
                  (item) => (
                    <td>
                      <p>{item.businessId[0].businessName}</p>
                    </td>
                  ),
                  'subscriptionFrom':
                  (item) => (
                    <td>
                      {/* <p>{moment(item.subscriptionFrom).format('L')}</p> */}
                      <p>{moment(item.subscriptionFrom).format('LL')}</p>
                    </td>
                  ),
                  'subscriptionTo':
                  (item) => (
                    <td>
                      <p>{moment(item.subscriptionTo).format('LL')}</p>
                    </td>
                  ),
                  'subscriptionAmt':
                  (item) => (
                    <td>
                      <p>{item.businessId[0].currency}-{item.subscriptionAmt}</p>
                    </td>
                  ),
                  'ownerName':
                  (item) => (
                    <td>
                      <p>{item.businessId[0].personalName}</p>
                    </td>
                  ),
                  // 'orderList':
                  // (item) => (
                  //   <td> 
                  //     <CButton size="sm" color="primary"onClick={ev => dispatch(Actions.openOrderDetailsDialog(item._id))} className="ml-1">
                  //           See Order Details
                  //         </CButton>                     
                  //   </td>
                  // ),
                // 'serviceCategory':
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
                //           {/* <h4>
                //             {item.serviceCategory[0].serviceCategoryName}
                //           </h4> */}
                //           <p className="text-muted">Service Category Name:  <b>{item.serviceCategory[0].serviceCategoryName}</b></p>
                //           <p className="text-muted">Service Category Image: <img height="50px" width="50px" alt="Service image" src= {localUrl+item.serviceCategory[0].serviceCategoryIcon}></img></p>

                //           {/* <CButton size="sm" color="info">
                //             User Settings
                //           </CButton>
                //           <CButton size="sm" color="danger" className="ml-1">
                //             Delete
                //           </CButton> */}
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
    </>
  )
}

export default SubscriptionList
