import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabStyle = isActive ? 'active-tab-btn' : ''

  const setActiveTab = () => {
    updateActiveTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabStyle}`} onClick={setActiveTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
