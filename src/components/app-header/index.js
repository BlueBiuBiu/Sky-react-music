import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from '@/common/local-data.js'

import {
  HeaderWrapper
} from './style.js'


const ShowSelectItem = (item, index) => {
  if (index < 3) {
    return (
      <NavLink to={item.link}>{item.title}</NavLink>
    )
  } else {
    return <a href={item.link}>{item.title}</a>
  }
}
export default memo(function SkyHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <a href="#/" className="logo sprite_01"></a>
        <div className="center">
          {
            headerLinks.map((item, index) => {
              return (
                <span key={item.title} className="title">
                  {
                    ShowSelectItem(item, index)
                  }
                </span>
              )
            })
          }
        </div>
        <div className="right">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="creator">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
