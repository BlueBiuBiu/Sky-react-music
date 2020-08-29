import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import SkyHeader from 'components/app-header'
import SkyContent from 'components/app-content'
import SkyFooter from 'components/app-footer'
import routes from './router'

import store from './store'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SkyHeader />
        {renderRoutes(routes)}
        {/* <SkyFooter /> */}
      </HashRouter>
    </Provider>
  )
})
