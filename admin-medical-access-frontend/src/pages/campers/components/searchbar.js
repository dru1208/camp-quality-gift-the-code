import React from "react"

const SearchBar = props => {
  return(
    <form className="camperForm" onSubmit={props.handleSearchResults} >
      <label htmlFor="searchValue">Camper Name</label>
      <input className="camper-searchbar" type="text" name="searchValue" />
      <input className="search-btn" type="submit" value="search" />
    </form>
  )
}

export default SearchBar