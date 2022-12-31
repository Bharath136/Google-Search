import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSelect = sugg => {
    this.setState({
      searchInput: sugg,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchedSuggestions = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchedSuggestions)
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <div className="card-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              className="search-input"
              onChange={this.onSearchInput}
            />
          </div>
          <ul className="list">
            {searchedSuggestions.map(eachVal => (
              <SuggestionItem
                suggestionsList={eachVal}
                key={eachVal.id}
                onSelect={this.onSelect}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
