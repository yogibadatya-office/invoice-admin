import React, { lazy, useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CProgress,
  CRow,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import reducer from './store/reducers'
import withReducer from '../../store/withReducer'
import * as Actions from './store/actions'
import constants from '../../fuse-configs/constants'


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))


const Dashboard = () => {
  const dispatch = useDispatch()
  const [customersData,setCustomerData] = useState([]);
  const [ordersData,setOrdersData] = useState([]);
  const [businessData,setBusinessData] = useState([]);
  // const localUrl = 'http://localhost:3004/pics/'
  const localUrl = 'http://116.72.16.200:3004/pics/'



  useEffect(()=>{
    // const request = axios.get(`${constants.SERVER_API_URL}/getCustomers`)
    const request = axios.get(`${constants.API_URL}/getCustomers`)
    request.then((response) => {
      setCustomerData(response.data.data)
    }).catch(error => {
      console.log(error)
      //dispatch(showMessage({message: error.response.data.message}))

    })
    // const request1 = axios.get(`${constants.SERVER_API_URL}/order/getOrders`)
    const request1 = axios.get(`${constants.API_URL}/order/getOrders`)
    request1.then((response) => {
      console.log("order details",response.data.data);
      setOrdersData(response.data.data)
    }).catch(error => {
      console.log(error)
      //dispatch(showMessage({message: error.response.data.message}))

    })
    // const request2 = axios.get(`${constants.SERVER_API_URL}/getBusinessProfileDetails`)
    const request2 = axios.get(`${constants.API_URL}/getBusinessProfileDetails`)

    request2.then((response) => {
      setBusinessData(response.data.data)
    }).catch(error => {
      console.log(error)
      //dispatch(showMessage({message: error.response.data.message}))

    })
  },[dispatch,setBusinessData,setCustomerData,setOrdersData])

  return (
    <>
      <WidgetsDropdown customer={String(customersData.length)} business={String(businessData.length)} order={String(ordersData.length)} />
      {/* <WidgetsDropdown /> */}

      <CRow>
        <CCol>
          <CCard>
            <CCardBody> 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Customer Name</th>
                    <th >Business Name</th>
                    <th>Order Amount</th>
                    <th >Order Status</th>
                    <th>Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.map((order) =>
                  <tr>
                    <td>
                      <div className="c-avatar">
                        <img src= "https://img.icons8.com/material-sharp/24/000000/user.png" className="c-avatar-img" alt="" />                        
                        {/* <img src="https://img.icons8.com/material-sharp/24/000000/user.png"/> */}
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                  <div>{order.customerId[0]== undefined?'':order.customerId[0].name }</div>
                      {/* <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div> */}
                    </td>
                    <td >
                    {order.businessId[0]== undefined?'':order.businessId[0].businessName}
                      {/* <CIcon height={25} name="cif-us" title="us" id="us" /> */}
                    </td>
                    <td>
                      {order.businessId[0]== undefined?'':order.businessId[0].currency}--{order.totalAmount}
                      {/* <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" /> */}
                    </td>
                    <td>
                      {order.orderStatus}
                      {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
                    </td>
                    <td>
                      {order.paymentStatus}
                      {/* <div className="small text-muted">Last login</div> */}
                      {/* <strong>10 sec ago</strong> */}
                    </td>
                  </tr>
                  )}
                  {/* <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-br" title="br" id="br" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="10" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-visa" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-in" title="in" id="in" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>74%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="warning" value="74" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-stripe" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-fr" title="fr" id="fr" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>98%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="danger" value="98" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-es" title="es" id="es" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>22%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="22" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-google-pay"/>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/6.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-pl" title="pl" id="pl" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="43" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-amex" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr> */}
                </tbody> 
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow> 
    </>
  )
}

export default withReducer('Dashboard', reducer) (Dashboard)
