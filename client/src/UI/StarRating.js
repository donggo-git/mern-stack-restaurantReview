import React from 'react'
import { AiFillStar } from 'react-icons/ai'


function StarRating({ rating }) {
    const rate = Math.round(rating)
    let starRender = []

    for (let i = 0; i < 5; i++)(
        i < rate ?
            starRender.push(<AiFillStar className='text-primary' />)
            : starRender.push(<AiFillStar className='text-gray' />)
    )
    return (
        <div className='my-2'>
            {/*star rating */}
            {starRender}
            {/* rate number */}
            <span> {rating}</span>
        </div>
    )
}

export default StarRating