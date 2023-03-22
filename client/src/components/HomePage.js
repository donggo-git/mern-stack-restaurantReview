import React, { useEffect, useState } from 'react'
//import sass and bootstrap
import '../scss/HomePage.scss'
import { Button } from 'react-bootstrap';
//import components
import Header from './Header';
import RestaurantItem from './RestaurantItem'

function HomePage() {
    const [restaurants, setRestaurants] = useState([])

    const fetchData = async () => {
        const rawData = await fetch('http://localhost:5000/api/v1/restaurants', {
            method: "GET"
        });
        const data = await rawData.json();
        console.log(data.data.restaurants)
        setRestaurants(data.data.restaurants)
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            {/*header */}
            <Header />
            {/*restaurant list */}
            <div className='mt-5'>
                {restaurants.map(restaurant => (
                    <RestaurantItem
                        key={restaurant._id}
                        name={restaurant.name}
                        image={restaurant.imageCover}
                        rating={restaurant.rating}
                        address={restaurant.address}
                        phoneNumber={restaurant.phoneNumber}
                    />
                ))}
            </div>
            {/*add restaurant btn */}
            <Button variant='primary' className='fw-bolder fs-3 px-3 text-white rounded-circle addBtn'>+</Button>

            {/*add restaurant form */}
        </div>
    )
}

export default HomePage