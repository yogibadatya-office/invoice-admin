import React from 'react'
import { Redirect } from 'react-router-dom'
import { FuseUtils } from '@fuse'
import {routing} from '../routes'

import { LogoutConfig } from '../main/logout/LogoutConfig'
import { LoginConfig } from '../main/login/LoginConfig'
import { pagesConfigs } from '../main/pages/pagesConfigs'
import { appsConfigs } from '../main/apps/appsConfigs'
import { CallbackConfig } from '../main/callback/CallbackConfig'

const routeConfigs = [
  ...appsConfigs,
  ...pagesConfigs,
  LoginConfig,
  LogoutConfig,
  CallbackConfig

]

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routing),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard"/>
  },
  {
    component: () => <Redirect to="/pages/errors/error-404"/>
  }
]

export default routes
