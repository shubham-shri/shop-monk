import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { sections } from './directory.data.js'

export class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: sections,
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default Directory
