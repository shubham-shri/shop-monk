import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './section.styles.scss'

class SectionPage extends Component {
  render() {
    const { coverImage, subSections } = this.props.sectionData
    console.log(this.props)
    return (
      <div className="section-container">
        <div className="banner">
          <img className="banner__image" src={coverImage} alt="banner" />
        </div>
        <div className="section__heading">Browse</div>
        <div className="sub-section-container">
          {subSections.map((section) => (
            <div className="">
              <div className="sub-section__heading">{section.title}</div>
              <div className="sub-section__item-container">
                {section.categorySection.map((category) => (
                  <div
                    className="sub-section__item-container__item"
                    onClick={() => this.props.history.push(category.link)}
                  >
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

export default withRouter(SectionPage)
