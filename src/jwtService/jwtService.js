import history from '../@history'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import FuseUtils from '../@fuse/FuseUtils'
import constants from '../fuse-configs/constants'

class jwtService extends FuseUtils.EventEmitter {

  init () {
    // this.setInterceptors()
    this.handleAuthentication()
  }

  setInterceptors = () => {
    axios.interceptors.response.use(response => {
      return response
    }, err => {
      return new Promise((resolve, reject) => {

        if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized response, logout the user
          this.emit('onAutoLogout', 'Session Expired. Please login.')
          this.logout()
          history.push({
            pathname: '/'
          })

        }
        throw err
      })
    })
  }

  handleAuthentication = () => {

    let access_token = this.getAccessToken()

    if (access_token === null) {
      this.logout()
      this.emit('onNoAccessToken')
      return
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token[0], access_token[1])
      this.emit('onAutoLogin', true)
    } else {
      this.setSession(null, null)
      this.emit('onAutoLogout', 'access_token expired')
    }
  }

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/auth/register', data)
        .then(response => {
          if (response.data.user) {
            this.setSession(response.data.access_token)
            resolve(response.data.user)
          } else {
            reject(response.data.error)
          }
        })
    })
  }

  signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {    
      axios.post(`${constants.API_URL}/auth/adminSignin`, {
          email,
          password
        }
      ).then(response => {
        const firstResponse = response
        console.log("login response", response.data.data);
        const authToken = response.data.data[0].accessToken
            this.setSession(authToken, response.data.data[0].accessToken)
            resolve(firstResponse.data.data[0])
            window.location.reload();
            // window.location.load('/');

            // this.loginTo()

      }).catch(error => {
        reject(error)
      })
    })
  }

  // signInWithToken = () => {

  //   return new Promise((resolve, reject) => {
  //     axios.post(`${constants.API_URL}/authentication/login_verify`)
  //       .then(response => {
  //         if (response.data.data) {
  //           this.setSession(response.data.data.token)
  //           resolve(response.data.data)
  //         } else {
  //           this.logout()
  //           reject('Failed to login with token22.')
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error)

  //         this.logout()
  //         reject('Failed to login with token11.')
  //       })
  //   })
  // }

  updateUserData = (user) => {
    return axios.post('/api/auth/user/update', {
      user: user
    })
  }

  setSession = (access_token, n_access_token) => {
    access_token = access_token || ''
    n_access_token = n_access_token || ''

    if (access_token) {
      //if (access_token && n_access_token) {
      localStorage.setItem('jwt_access_token', access_token)
      if (n_access_token) {
        localStorage.setItem('node_access_token', n_access_token)
      } else { // @todo temp hack until node login_verify api is not implemented.
        n_access_token = localStorage.getItem('node_access_token')
      }
      // axios.defaults.headers.common['X_AUTH_TOKEN'] = access_token
      axios.defaults.headers.common = {
        X_AUTH_TOKEN: access_token,
        authorization: n_access_token
      }
      // axios.defaults.headers.common['authorization'] = n_access_token
    } else {
      localStorage.removeItem('jwt_access_token')
      localStorage.removeItem('node_access_token')
      delete axios.defaults.headers.common['X_AUTH_TOKEN']
      //delete axios.defaults.headers.common['authorization']
    }
  }

  signInWithToken = () => {
    
    // var localUser = JSON.parse(localStorage.getItem("admin") || "[]");
    // // console.log(localUser.email);
    // let email = localUser.email
    // let password = localUser.mpswd
    
    return new Promise((resolve, reject) => {    
      axios.post(`${constants.API_URL}/auth/verifyToken`
      //  {
      //     email,
      //     password
      //   }
      ).then(response => {
          if (response.data.data) {
            this.setSession(response.data.data[0].accessToken)
            resolve(response.data.data[0])
            // this.loginTo()
          } else {
            this.logout()
            reject('Failed to login with token.')
          }
        })
        .catch(error => {
          console.log(error)

          this.logout()
          reject('Failed to login with token.')
        })
    })
  }

  logout = () => {
    this.setSession(null, null)
    localStorage.removeItem('admin')

    history.push({
      pathname: '/'
    })
  }

  isAuthTokenValid = access_token => {
    if (!access_token[0] || !access_token[1]) {
      return false
    }
    const decoded = jwtDecode(access_token[0])
    const node_decoded = jwtDecode(access_token[1])
    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime || node_decoded.exp < currentTime) {
      console.warn('access token expired')
      return false
    } else {
      return true
    }

  }

  getAccessToken = () => {

    if( window.localStorage.getItem('jwt_access_token') != null){
    return [window.localStorage.getItem('jwt_access_token'), window.localStorage.getItem('node_access_token')]
    }else{
      return null
    }
  }
}

const instance = new jwtService()

export default instance
