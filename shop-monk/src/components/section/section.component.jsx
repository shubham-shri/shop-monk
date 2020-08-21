import React, { Component } from 'react'
import './section.styles.scss'

export default class SectionPage extends Component {
  render() {
    const { coverImage } = this.props.sectionData
    return (
      <div className="section-container">
        <div
          className="section-container__banner"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
        <div className="section-container__heading">Browse</div>
        <div className="section-container__sub-section-container">
          <div className="section-container__sub-section-container__sub-section">
            top wear
          </div>
          <div className="section-container__sub-section-container__sub-section">
            bottom wear
          </div>
        </div>
      </div>
    )
  }
}
