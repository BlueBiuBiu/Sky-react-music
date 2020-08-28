import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from'react-router-config'

import { DiscoverWrapper } from './style'
import { dicoverMenu } from '@/common/local-data'

export default memo(function SkyDiscover(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className=" wrap-v1">
        <div className="discover">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div key={item.title} className="discover-item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </div>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
