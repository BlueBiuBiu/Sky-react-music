import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { SkyThemeHeaderWrapper } from './style'

const SkyThemeHeaderRCM = memo(function SkyThemeHeaderRCM(props) {
  const { title, leftTitle } = props;
  return (
    <SkyThemeHeaderWrapper>
      <div className="theme-header sprite_02">
        <div className="left">{leftTitle}</div>
        <div className="center">
          <div className="title">
            {
              title.map((item, index) => {
                return (
                  <div className="title-item" key={item}>
                    <span className="item-left">{item}</span>
                    <span>|</span>
                  </div>

                )
              })
            }
          </div>
        </div>
        <div className="right">
          <span className="more">更多</span>
          <i className="icon sprite_02"></i>
        </div>
      </div>
    </SkyThemeHeaderWrapper>
  )
})

SkyThemeHeaderRCM.propType = {
  leftTitle: PropTypes.string.isRequired,
  title: PropTypes.array
}

SkyThemeHeaderRCM.defaultProps = {
  title: []
}

export default SkyThemeHeaderRCM
