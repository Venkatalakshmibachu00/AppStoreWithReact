// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="app-list">
      <img className="image" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
