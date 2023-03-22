import React from 'react'
import { AiFillStar } from 'react-icons/ai'



function StarRating({ rating }) {
    const rate = Math.round(rating)
    let starRender = []
    for (let i = 0; i < rate; i++)(
        starRender.push(<AiFillStar />)
    )
    return (
        <div>
            {/*star rating */}
            {starRender}
            {/* rate number */}
            <span> {rating}</span>
        </div>
    )
}

export default StarRating