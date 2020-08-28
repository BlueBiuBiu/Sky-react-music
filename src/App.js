import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import SkyHeader from 'components/app-header'
import SkyContent from 'components/app-content'
import SkyFooter from 'components/app-footer'
import routes from './router'


export default memo(function App() {
  return (
    <HashRouter>
      <SkyHeader />
      {renderRoutes(routes)}
      <SkyFooter />
    </HashRouter>
  )
})
