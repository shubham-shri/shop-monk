import React, { Component } from 'react'
import './section.styles.scss'

export default class SectionPage extends Component {
  render() {
    const { coverImage, subSections } = this.props.sectionData
    console.log(this.props)
    return (
      <div className="section-container">
        <div className="section-container__banner">
          <img className="banner-image" src={coverImage} alt="banner" />
        </div>
        <div className="section-container__heading">Browse</div>
        <div className="section-container__sub-section-container">
          {subSections.map((section) => (
            <div className="section-container__sub-section-container__sub-section">
              {section.title}
              <div className="section-container__sub-section-container__sub-section__item-container">
                {section.categorySection.map((category) => (
                  <div className="section-container__sub-section-container__sub-section__item-container__item">
                    <div>
                      <img
                        className="category-image"
                        src={`${category.categoryImage}`}
                        alt="category-item"
                      />
                    </div>
                    <div className="sub-section__category-items">
                      {category.categoryName}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
