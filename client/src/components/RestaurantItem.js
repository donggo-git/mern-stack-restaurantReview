import React from 'react'

function RestaurantItem({ image, name, info, rating }) {
    return (
        <div>
            {/*main image */}
            <img src={image} alt="restaurant image" />
            {/*restaurant item */}
            <div>
                {/*restaurant name */}
                <h3>{name}</h3>
                {/*rating */}
                {/*restaurant basic info */}
                <p>{info}</p>
            </div>
        </div>
    )
}

export default RestaurantItem