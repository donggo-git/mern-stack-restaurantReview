import React from 'react'
import Header from './Header';
import '../scss/HomePage.scss'
import { Button } from 'react-bootstrap';

function homePage() {
    return (
        <div>
            {/*header */}
            <Header />
            {/*restaurant list */}
            {/*add restaurant btn */}
            <Button variant='primary' className='fw-bolder fs-3 px-3 text-white rounded-circle addBtn'>+</Button>

            {/*add restaurant form */}
        </div>
    )
}

export default homePage