// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, displayApps, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickDisplayApps = () => {
    displayApps(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-btn-class' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickDisplayApps}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
