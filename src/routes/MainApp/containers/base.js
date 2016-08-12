import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './base.css'

class Base extends Component {
  render() {
    return (
      <div>
        <div>Base Header</div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Base.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
}

export default CSSModules(Base, styles)
