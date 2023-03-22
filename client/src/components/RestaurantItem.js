import React from 'react'
import StarRating from '../UI/StarRating'
import '../scss/RestaurantItem.scss'

function RestaurantItem({ image, name, phoneNumber, address, rating }) {

    const info = `Address: ${address}`

    return (
        <div
            className='p-3 d-flex mx-auto text-white RestaurantItem '
        >
            {/*main image */}
            <img src={image} alt="restaurant image" height="100%" />
            {/*restaurant item */}
            <div className='mx-4'>
                {/*restaurant name */}
                <h3>{name}</h3>
                {/*rating */}
                <StarRating rating={rating} />
                {/*restaurant basic info */}
                <p>{info}</p>
                <p>{phoneNumber}</p>
            </div>
        </div>
    )
}

export default RestaurantItem