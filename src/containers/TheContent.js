import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import routes from '../routes'
import { FuseMessage } from '../@fuse'
import EditProfileDialog from '../views/users/modal/EditProfile'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <FuseMessage />
        <EditProfileDialog/>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props =>
                    localStorage.getItem('jwt_access_token') !== null
                      ? (
                        <route.component {...props} />
                      ) : (
                        <>
                          <Redirect to="/" />

                          {/* <Route exact path="/" name="Login Page" render={props => <Login {...props} />} /> */}
                        </>
                      )
                  }
                />
              ) : null;
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
