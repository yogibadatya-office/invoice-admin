import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import reducer from './store/reducers'
import withReducer from '../../store/withReducer'
import { useDispatch, useSelector } from 'react-redux'
import {  useHistory } from 'react-router-dom'
import { useForm } from '../../@fuse/hooks'
import {showMessage} from '../../store/actions/fuse'
import * as Actions from './store/actions'
import _ from 'lodash'

const AddServiceCategory = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  let history = useHistory();
  const [showElements, setShowElements] = React.useState(true)
  const [upload,setUpload] = useState()
  const dispatch = useDispatch()
  const { form, handleChange, setForm, setInForm } = useForm({
    serviceCategoryName: '',   
  })
  function handleSubmit(event) {  
    event.preventDefault()
        dispatch(Actions.addServiceCateogry({
          // _id: creditSettingDialog.data.id,
          serviceCategoryName: form.serviceCategoryName,
          serviceCategoryIcon: form.serviceCategoryIcon,
        }))
        history.push('/serviceCategory/serviceCategoryList')
  }
  const handleUploadChange = (e, field) => {
    const file = e.target.files[0]
    if (!file) {
      dispatch(showMessage({message: 'Please select image.'}))
      return false;
    }
   
    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      dispatch(showMessage({message: 'Please select valid image.'}))
      setUpload(false)
      return false;
    }
    const fd = new FormData();

    fd.append('serviceCategoryIcon',file,file.name)
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      setUpload(true)

      // setForm(_.set({ ...form }, field, `data:${file.type};base64,${btoa(reader.result)}`))
      setForm(_.set({ ...form }, field, file))

    }

    reader.onerror = function () {
      console.log('error on load image')
    }
  }

  return (
    <>    
      <CRow>        
        <CCol xs="12" >
          <CCard>
            <CCardHeader>
             Add Service Category
            </CCardHeader>
            <CCardBody>
              <CForm className="was-validated"  action="" method="post" >
                <CFormGroup>
                  <CLabel htmlFor="serviceName">Service Category Name</CLabel>
                  <CInput className="form-control-warning" id="serviceCategoryName" error={form.serviceCategoryName === ''}
                   onChange={handleChange}
                   name="serviceCategoryName"
                   className="form-control" value={form.serviceCategoryName } required />
                  <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="inputWarning2i2">Service Category Icon</CLabel>
                  <CInput
                accept="image/*"
                className="form-control"
                id="inputWarning2i2" required
                type="file"
                onChange={(e) => handleUploadChange(e, 'serviceCategoryIcon')}
              />
                  <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                </CFormGroup>
                <CFormGroup className="form-actions">
                <button type="button" onClick={handleSubmit}
          //  disabled={!canBeSubmitted()} 
          className="btn btn-primary"
          disabled={form.serviceCategoryName === "" || form.serviceCategoryIcon === undefined? true : false}
          >Save </button>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default withReducer('ServiceCategory', reducer) (AddServiceCategory)