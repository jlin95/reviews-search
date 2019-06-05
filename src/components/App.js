import React, { useState }from 'react'
import SearchResults from './SearchResults'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  padding: 40px;
  text-align: center;
`
const Prompt = styled.h3`
`

const SearchBar = styled.input`
  height: 48px;
  border: 2px solid black;
  border-radius: 8px;
  font-size: 20px;
  width: 100%;
  margin-bottom: 24px;
  display: block;
`

const Button = styled.button`
  height: 48px;
  background: darkgreen;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  width: 200px;
  margin-bottom: 24px;
`

// returns num_results, results, status
const App = () => {

  const [results, setResults] = useState([])
  const [author, setAuthor] = useState('')

  const formQuery = string => `author=${string}&`
  const API_URI = `https://api.nytimes.com/svc/books/v3/reviews.json?${formQuery(author)}api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`


  const fetchResults = () => fetch(API_URI).then(response => {
    return response.json()
  }).then(json => setResults(json))

  return (
    <Container>
      <Prompt>Key in your search terms here, via ISBN number, author, or book title. They can also be keyed in at all at once too.</Prompt>
      <SearchBar type="text" onChange={e => setAuthor(e.target.value)}/>
      <Button onClick={fetchResults}>Click</Button>
      <SearchResults results={results} />
    </Container>
  )
}

export default App
