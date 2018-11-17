import React from "react"

const SearchBar = props => {
  return(
    <form onSubmit={props.handleSearchResults} >
      <label htmlFor="searchValue">Camper Name</label>
      <input type="text" name="searchValue" />
      <input type="submit" value="search" />
    </form>
  )
}

export default SearchBar