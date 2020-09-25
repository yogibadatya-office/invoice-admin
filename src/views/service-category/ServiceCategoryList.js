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
import CIcon from '@coreui/icons-react'
// import * as Actions from './store/actions'
// import reducer from './store/reducers'
// import OrderDetails from './modal/OrderDetails'

const ServiceCategoryList = () => {
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
  const [serviceCategoryList, setServiceCategoryList] = useState([])


  useEffect(() => {
    currentPage !== page && setPage(currentPage)
    const request = axios.get(`${constants.API_URL}/service/getServiceCategoryList`)
    request.then((response) => {
        setServiceCategoryList(response.data.data)
    }).catch(error => {
      console.log(error)
      //dispatch(showMessage({message: error.response.data.message}))

    })
  }, [currentPage, page, dispatch])


  const fields = [
    { key: 'serviceCategoryName', _style: { width: '20%' } },
    // 'registered',
    { key: 'serviceCategoryIcon', _style: { width: '20%' } },
    // { key: 'Actions', _style: { width: '20%' } },
    
  ]


  return (
    <>
      {/* <OrderDetails/> */}
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader>
          <b>Service-Category List</b>
            {/* <small className="text-muted"> example</small> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={serviceCategoryList}
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
                'serviceCategoryIcon':
                  (item) => (
                    <td>
                      {/* http://116.72.16.200:3004/pics/0aaf89f18f8a51008b18030f7ddc17d7.png */}
                      {/* http://localhost:3004/pics/0aaf89f18f8a51008b18030f7ddc17d7.png */}
                      {/* if server api is use then change localUrl to serverUrl  */}
                      <img height="50px" width="50px" src={localUrl+item.serviceCategoryIcon} alt="serviceCategory image">
                      {/* {item} */}
                      </img>
                    </td>
                  ),
                  // 'Actions':
                  // (item) => (
                  //   <td>
                  //    <a data-toggle="tooltip" data-placement="top" title="Edit"   class=" btn-md cil-external-link btn-success editHashtag"><CIcon class="cil-list"size="2xl"></CIcon></a>&nbsp;&nbsp;<a data-toggle="tooltip" data-placement="top" title="Delete" href="javascript:void(0)" class="btn btn-md btn-danger deleteHashtag"><i class="fa fa-trash"></i></a>
                  //   </td>
                  // ),
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default ServiceCategoryList
