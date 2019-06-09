import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Title = styled.h3`
  font-size: 20px;
`
const ListingContainer = styled.div`
  display: block;
  margin-bottom: 6px;
`

const BookListing = ({ review }) => {
  const { book_title, url, ...rest } = review
  return (
    <ListingContainer>
      <Title>{book_title}</Title>
      <a href={url}>Review</a>
    </ListingContainer>
  )
}

BookListing.propTypes = {
  review: PropTypes.string.isRequired
}

export default BookListing
