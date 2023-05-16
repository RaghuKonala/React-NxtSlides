import './index.css'

const ActiveSlide = props => {
  const {
    activeSlideDetails,
    isHeadingFieldActive,
    isDescriptionFieldActive,
    updateSlideHeading,
    updateSlideDescription,
    toggleHeadingField,
    toggleDescriptionField,
  } = props
  const {heading, description} = activeSlideDetails

  const onBlurDescriptionField = () => {
    toggleDescriptionField()
  }

  const onBlurHeadingField = () => {
    toggleHeadingField()
  }
  const onChangeDescription = event => {
    updateSlideDescription(event.target.value)
  }

  const onChangeHeading = event => {
    updateSlideHeading(event.target.value)
  }

  const onClickDescription = () => {
    toggleDescriptionField()
  }

  const onClickHeading = () => {
    toggleHeadingField()
  }

  return (
    <div className="active-slide-container">
      {isHeadingFieldActive ? (
        <input
          className="active-slide-heading input-field"
          value={heading}
          onChange={onChangeHeading}
          onBlur={onBlurHeadingField}
          type="text"
        />
      ) : (
        <h1 className="active-slide-heading" onClick={onClickHeading}>
          {heading}
        </h1>
      )}
      {isDescriptionFieldActive ? (
        <input
          className="active-slide-description input-field"
          value={description}
          onChange={onChangeDescription}
          onBlur={onBlurDescriptionField}
          type="text"
        />
      ) : (
        <p className="active-slide-description" onClick={onClickDescription}>
          {description}
        </p>
      )}
    </div>
  )
}

export default ActiveSlide
