import {Component} from 'react'
import {v4} from 'uuid'

import Header from './components/Header'
import SlideTab from './components/SlideTab'
import ActiveSlide from './components/ActiveSlide'
import './App.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class App extends Component {
  state = {
    slidesList: [...initialSlidesList],
    activeTabId: initialSlidesList[0].id,
    isHeadingFieldActive: false,
    isDescriptionFieldActive: false,
  }

  addNewSlide = () => {
    const {slidesList, activeTabId} = this.state
    const activeTabIndex = slidesList.findIndex(
      eachSlide => eachSlide.id === activeTabId,
    )
    const newSlide = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    }
    const newList = [...slidesList]
    newList.splice(activeTabIndex + 1, 0, newSlide)

    this.setState({
      slidesList: newList,
      activeTabId: newSlide.id,
    })
  }

  toggleDescriptionField = () => {
    this.setState(prevState => ({
      isDescriptionFieldActive: !prevState.isDescriptionFieldActive,
    }))
  }

  toggleHeadingField = () => {
    this.setState(prevState => ({
      isHeadingFieldActive: !prevState.isHeadingFieldActive,
    }))
  }

  updateSlideDescription = value => {
    const {activeTabId, slidesList} = this.state
    this.setState({
      slidesList: slidesList.map(eachSlide => {
        if (eachSlide.id === activeTabId) {
          return {...eachSlide, description: value}
        }
        return eachSlide
      }),
    })
  }

  updateSlideHeading = value => {
    const {activeTabId, slidesList} = this.state
    this.setState({
      slidesList: slidesList.map(eachSlide => {
        if (eachSlide.id === activeTabId) {
          return {...eachSlide, heading: value}
        }
        return eachSlide
      }),
    })
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  renderSlidesPanel = () => {
    const {slidesList, activeTabId} = this.state
    return (
      <ol className="slides-panel">
        {slidesList.map(eachSlide => (
          <SlideTab
            key={eachSlide.id}
            updateActiveTabId={this.updateActiveTabId}
            isActive={activeTabId === eachSlide.id}
            tabDetails={eachSlide}
            slidesList={slidesList}
          />
        ))}
      </ol>
    )
  }

  renderNewButton = () => (
    <button className="new-button" type="button" onClick={this.addNewSlide}>
      <img
        className="plus-icon"
        alt="new plus icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
      />
      <p className="new-button-text">New</p>
    </button>
  )

  render() {
    const {
      slidesList,
      activeTabId,
      isHeadingFieldActive,
      isDescriptionFieldActive,
    } = this.state

    const activeSlideDetails = slidesList.find(
      eachSlide => eachSlide.id === activeTabId,
    )

    return (
      <div className="app-container">
        <Header />
        <div className="slides-container">
          <div className="slides-responsive-container">
            {this.renderNewButton()}
            <div className="align-container">
              {this.renderSlidesPanel()}
              <ActiveSlide
                activeSlideDetails={activeSlideDetails}
                isHeadingFieldActive={isHeadingFieldActive}
                isDescriptionFieldActive={isDescriptionFieldActive}
                updateSlideHeading={this.updateSlideHeading}
                updateSlideDescription={this.updateSlideDescription}
                toggleHeadingField={this.toggleHeadingField}
                toggleDescriptionField={this.toggleDescriptionField}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
