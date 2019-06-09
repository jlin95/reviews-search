import React, { useEffect, useState }from 'react'
import LoadingIndicator from './LoadingIndicator'
import SearchResults from './SearchResults'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  padding: 40px;
  text-align: center;
`
const Prompt = styled.h4`
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

  const [author, setAuthor] = useState('')
  const [error, setHasError] = useState(false)
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState(`https://api.nytimes.com/svc/books/v3/reviews.json?author=''&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setHasError(false)
      try {
        const result = await axios(url)
        setResults(result.data)
      } catch (error) {
        setHasError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])

  return (
    <Container>
      <Prompt>Find all reviews related to an author.</Prompt>
      <SearchBar type="text" onChange={e => setAuthor(e.target.value)} value={author}/>
      <Button onClick={() => setUrl(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${author}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)}>Click</Button>
      <LoadingIndicator loading={loading}/>
      {error && <div>Oops. Did you type in any search term at all?</div>}
      {results && <SearchResults results={results} />}
    </Container>
  )
}

export default App
