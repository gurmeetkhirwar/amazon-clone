import React from 'react';
import '../static/css/header.css'

function Header() {
    return (
        <div className='header'>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className='header_logo' alt="" />
            <div className='header_search'>
                <input className='header_searchInput' type="text" />
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>https://github.com/gatsbyjs/gatsby/issues/11406

                </div>
                <div className='header_option'>

                </div>
            </div>
        </div>
    )
}

export default Header
