import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom'
import * as authActions from '../../../auth/store/actions'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CValidFeedback,
    CInvalidFeedback,
    CRow
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

const Login = () => {



    const dispatch = useDispatch()
    let history = useHistory();
    const [login,setLogin] = useState({loginData:{
        username: '',
        password: '',
    }})
    
    useEffect(() => {

      if(localStorage.getItem('jwt_access_token') !== null){
        history.push('/dashboard')
      } 
    
    })

    const handleChange =(e)=> {
        const { name, value } = e.target;
        setLogin({...login,loginData:{...login.loginData,[name]:value}});
    }
  
    function handleSubmit  (e) {
        e.preventDefault();
        const { username, password } = login.loginData;   
        // if (username) {     
          const userData = {       email : username,
            password : password}
            // history.push('/dashboard')
          dispatch(authActions.submitLogin(userData))   
        //  return <Redirect to = '/dashboard'/>
            history.push('/dashboard')
        // }
    }

    return (
        <div className="c-app c-default-layout flex-row align-items-center">
          <CContainer>        
            <CRow className="justify-content-center">
              <CCol md="4">     
                <CCardGroup>                  
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm className="was-validated" name="form"  >
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <CInputGroup htmlFor="inputWarning2i" className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" className="form-control-warning" value={login.username} name="username" onChange={handleChange} id="inputWarning2i" required/>
                          <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                        </CInputGroup>
                        <CInputGroup htmlFor="inputWarning22i" className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="password" className="form-control-warning" value={login.password} name="password"  onChange={handleChange} id="inputWarning22i" required/>
                          <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                        </CInputGroup>
                        <CRow>
                          <CCol xs="6">
                          <button type="button" onClick={handleSubmit} 
                          disabled={login.loginData.username === "" || login.loginData.password === "" ? true : false}
                           className="btn btn-primary">Login</button>
                            {/* <CButton type="submit" color="primary" className="px-4">Login</CButton>  */}
                          </CCol>
                          <CCol xs="6" className="text-right">
                            <CButton  color="link" className="px-0">Forgot password?</CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                    <CCardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.</p>
                        <Link to="/register">
                          <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                        </Link>
                      </div>
                    </CCardBody>
                  </CCard>
                */}
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      
      )

}
export default Login