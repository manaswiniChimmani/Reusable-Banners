// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={className}>
      <h1 className="h1">{headerText}</h1>
      <p className="desc">{description}</p>
      <button className="btn1" type="button">
        Show More
      </button>
    </li>
  )
}
export default BannerCardItem
