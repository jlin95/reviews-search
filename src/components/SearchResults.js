import React from 'react'
import BookListing from './BookListing'
import styled from 'styled-components'

const ResultsContainer = styled.div``

const NotFound = styled.h6``

const SearchResults = ({ data }) => {
  const { results, num_results } = data
  return num_results > 0 ?
    <ResultsContainer>
      <div>{num_results} results found</div>
      {results.map(result => {
        return <BookListing review={result}/>
        })
      }
    </ResultsContainer> :
    <NotFound>Boop, no results found. Try with a different author?</NotFound>
}

export default SearchResults
