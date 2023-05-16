import './index.css'

const SlideTab = props => {
  const {tabDetails, slidesList, isActive, updateActiveTabId} = props
  const {id, heading, description} = tabDetails

  const tabIndex = slidesList.findIndex(eachSlide => eachSlide.id === id)

  const tabClassName = isActive ? 'tab-item bg-color' : 'tab-item'
  const tabContentClassName = isActive ? 'tab-content bg-white' : 'tab-content'

  const onSelectTab = () => updateActiveTabId(id)

  return (
    <li
      className={tabClassName}
      testid={`slideTab${tabIndex + 1}`}
      onClick={onSelectTab}
    >
      <p className="tab-index">{tabIndex + 1}</p>
      <div className={tabContentClassName}>
        <h1 className="slide-heading">{heading}</h1>
        <p className="slide-description">{description}</p>
      </div>
    </li>
  )
}

export default SlideTab
