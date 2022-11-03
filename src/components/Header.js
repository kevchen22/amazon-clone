import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img 
        className='header-logo'
        src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
        />

        <div
        className='header-search'>
            <input
            className="header-search-input"
            type="text"
            />
            <SearchIcon className="header-searchIcon" />
            
        </div>
        <div className="header-nav">

            <div className='header-option'>
                <span className='header-option-one'>
                    Hello Guest
                </span>
                <span className='header-option-two'>
                    Sign in
                </span>
            </div>

            <div className='header-option'>
                <span className='header-option-one'>
                    Returns
                </span>
                <span className='header-option-two'>
                    & Orders
                </span>
            </div>

            <div className='header-option'>
                <span className='header-option-one'>
                    Your
                </span>
                <span className='header-option-two'>
                    Prime
            </span>
            </div>

            <div className='header-cart'>
            <ShoppingBasketIcon />
            <span className="header-option-two header-cartCount">0</span>
            </div>

        </div>
    </div>
  )
}

export default Header