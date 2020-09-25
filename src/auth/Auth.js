import React, { Component } from 'react'
// import { FuseSplashScreen } from '@fuse'
import { connect } from 'react-redux'
import * as userActions from '../auth/store/actions'
import { bindActionCreators } from 'redux'
import * as Actions from '../store/actions'
import jwtService from '../jwtService'

class Auth extends Component {

  state = {
    waitAuthCheck: true
  }

  componentDidMount () {
    return Promise.all([
      // Comment the lines which you do not use
      //this.firebaseCheck(),
      //this.auth0Check(),
      this.jwtCheck()
    ]).then(() => {
      this.setState({waitAuthCheck: false})
    })
  }

  jwtCheck = () => new Promise(resolve => {

    jwtService.on('onAutoLogin', () => {

      this.props.showMessage({message: 'Logging in'})
      // window.location.reload('/www/invoice_app/adminPanel/');

      /**
       * Sign in and retrieve user data from Api
       */
      jwtService.signInWithToken()
        .then(user => {
          console.log("hdjdhdhdhdhdhdhdhd",user);

          this.props.setUserData(user)

          resolve()

          this.props.showMessage({message: 'Logged in '})
        })
        .catch(error => {

          this.props.showMessage({message: error})

          resolve()
        })
    })

    // jwtService.on('onAutoLogout', (message) => {

    //   if (message) {
    //     this.props.showMessage({message})
    //   }

    //   this.props.logout()

    //   resolve()
    // })

    jwtService.on('onNoAccessToken', () => {

      resolve()
    })

    jwtService.init()

    return Promise.resolve()
  })

  render () {
    // console.log(this.props.children);
    return this.state.waitAuthCheck ? '' : <React.Fragment children={this.props.children}/>
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
      logout: userActions.logoutUser,
      setUserData: userActions.setUserData,
      showMessage: Actions.showMessage,
      hideMessage: Actions.hideMessage
    },
    dispatch)
}

export default connect(null, mapDispatchToProps)(Auth)
