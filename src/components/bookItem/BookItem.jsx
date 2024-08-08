import React from 'react'

const BookItem = ({title, author, rating, num_pages}) => {

    return (
        <>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>{rating} {rating?.length > 1 ? "stars" : "star"}</div>
            <p>{num_pages} pages</p>
        </>
    )
}

export default BookItem;
