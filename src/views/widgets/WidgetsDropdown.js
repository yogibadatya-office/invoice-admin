import React, { useEffect } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  // CDropdown,
  // CDropdownMenu,
  // CDropdownItem,
  // CDropdownToggle
} from '@coreui/react'

// import * as Actions from '../dashboard/store/actions'
// import { useSelector, useDispatch } from 'react-redux'
import CIcon from '@coreui/icons-react'
// import ChartLineSimple from '../charts/ChartLineSimple'
// import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = (props) => {
  // console.log("props",props);
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(Actions.getCustomers())
  // }, [dispatch])
  // render
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
          header= {props.business}
          text="Total Businesses"
          footerSlot={
            <CIcon className="c-chart-wrapper mt-3 mx-3" style={{height: '20px'}} 
            name=""
            />
            // <ChartLineSimple
            //   pointed
            //   className="c-chart-wrapper mt-3 mx-3"
            //   style={{height: '70px'}}
            //   dataPoints={[65, 59, 84, 84, 51, 55, 40]}
            //   pointHoverBackgroundColor="primary"
            //   label="Members"
            //   labels="months"
            // />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-info"
          header={String(props.order)}
          text="Total Orders"
          footerSlot={
            <CIcon className="c-chart-wrapper mt-3 mx-3" style={{height: '20px'}} 
            name=""
            />
            // <ChartLineSimple
            //   pointed
            //   className="mt-3 mx-3"
            //   style={{height: '70px'}}
            //   dataPoints={[1, 18, 9, 17, 34, 22, 11]}
            //   pointHoverBackgroundColor="info"
            //   options={{ elements: { line: { tension: 0.00001 }}}}
            //   label="Members"
            //   labels="months"
            // />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-warning"
          header={String(props.customer)}
          text="Total Customers"
          footerSlot={
            <>
            {/* <b className="mr-10"><b>Total Customers</b></b> */}

            <CIcon className=" mt-3 mx-3" style={{height: '20px'}} 
            // name="cil-people"
            name=""
            ></CIcon>
            {/* <i class="cil-contact"></i> */}
            </>
            // <ChartLineSimple
            //   className="mt-3"
            //   style={{height: '70px'}}
            //   backgroundColor="rgba(255,255,255,.2)"
            //   dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            //   options={{ elements: { line: { borderWidth: 2.5 }}}}
            //   pointHoverBackgroundColor="warning"
            //   label="Members"
            //   labels="months"
            // />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      {/* <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="9.823"
          text="Members online"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown> 
      </CCol>*/}
    </CRow>
  )
}

export default WidgetsDropdown
