import React, { Component } from "react"
// import history from "../../history"
// import axios from "axios"

import SearchBar from "./components/searchbar"
import CamperTable from "./components/camperTable"


class Campers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayResults: this.props.campers
    }
  }

  _handleClearDisplayResults = e => {
    e.preventDefault()
    this.setState({
      displayResults: this.props.campers
    })
  }

  _handleSearchResults = e => {
    e.preventDefault()
    const displayResults = this.props.campers.filter(camper => {
      return (camper.firstName.toLowerCase() === e.target.searchValue.value.toLowerCase() ||
      camper.lastName.toLowerCase() === e.target.searchValue.value.toLowerCase() ||
      (camper.firstName + " " + camper.lastName).toLowerCase() === e.target.searchValue.value.toLowerCase())
    })
    this.setState({
      displayResults
    })
  }

  _toggleMedNotAdministered = e => {
    e.preventDefault()
    const displayResults = this.props.campers.filter(camper => {
      return camper.medAdministered === false
    })
    this.setState({
      displayResults
    })
  }


  render() {
    return (
      <div>
        <div>List of Campers</div>
        <SearchBar handleSearchResults={this._handleSearchResults} />
        <button onClick={this._handleClearDisplayResults}>List All</button>
        <button onClick={this._toggleMedNotAdministered}>Medication Required</button>
        <CamperTable searchResults={this.state.searchResults} campers={this.state.displayResults} />
      </div>
    )
  }
}

export default Campers