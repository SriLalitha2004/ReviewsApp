// Write your code here
import {Component} from 'react'
import './index.css'

const leftArrowUrl =
  'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const rightArrowUrl =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'
class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onClickLeft = () => {
    const {reviewIndex} = this.state
    const newIndex = reviewIndex > 0 ? reviewIndex - 1 : reviewIndex
    this.setState({reviewIndex: newIndex})
  }

  onClickRight = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const newIndex =
      reviewIndex < reviewsList.length - 1 ? reviewIndex + 1 : reviewIndex
    this.setState({reviewIndex: newIndex})
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} =
      reviewsList[reviewIndex]
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="cont2">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onClickLeft}
          >
            <img src={leftArrowUrl} alt="left arrow" className="image" />
          </button>
          <div>
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRight}
          >
            <img src={rightArrowUrl} alt="right arrow" className="image" />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
