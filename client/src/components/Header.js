import React from 'react'
import { Button } from 'react-bootstrap';
import '../scss/Header.scss'

function Header() {
    return (
        <header className='d-flex flex-row justify-content-evenly align-item-center py-3'>
            {/*user account */}
            <div className='header__account d-flex flex-row  align-items-center'>
                {/*user icon */}
                <div className='mx-2 py-2 px-3 bg-secondary rounded-circle'>D</div>
                {/*user name */}
                <p className='mx-2 my-0 text-primary'>Dong Nguyen</p>
            </div>
            {/*search bar */}
            <input
                type="text"
                placeholder='search'
                className='px-3 rounded-pill p-2 text-white'
            />
            {/* header buttons */}
            <div className='d-flex flex-row'>
                <Button variant='outline-primary' className='mx-2 px-4'>Login</Button>
                <Button variant='primary' className='mx-2 px-4'>Sign up</Button>
            </div>
        </header>
    )
}

export default Header