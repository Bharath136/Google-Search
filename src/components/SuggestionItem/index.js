import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onSelect} = props
  const {suggestion} = suggestionsList
  const onPrint = () => {
    onSelect(suggestion)
  }
  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button" onClick={onPrint}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="sug"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
