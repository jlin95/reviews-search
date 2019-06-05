import React from 'react'
import styled from 'styled-components'

const ResultsContainer = styled.div``

const NotFound = styled.h6``

// GET https://api.nytimes.com/svc/books/v3/reviews.json?author=King&api-key=[YOUR_API_KEY]

const SearchResults = ({ results }) => {
  if (results) {
    return results.num_results > 0 ? <ResultsContainer>{JSON.stringify(results.results)}</ResultsContainer> :
      <NotFound>Boop, no results found</NotFound>
  }
}

export default SearchResults
