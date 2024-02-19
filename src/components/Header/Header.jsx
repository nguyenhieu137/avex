import React from "react"
import './header.scss'

import img from '../../assets/avex-logo.jpg'

const Header = () => {
    return(
        <div className="header">
            <div className="header-container">
                <div className="header-top_container">
                    <div className="header-top">
                        <div className="header-top_left">
                            <span className="email">
                                Email:&nbsp;
                                <a href="mailto:awesome@gmail.com">awesome@gmail.com</a>
                            </span>
                            <span className="space">|</span>
                            <span className="hotline">
                                Hotline hỗ trợ khách hàng:&nbsp; 
                                <a href="tel:19006750">1900 6750</a>
                            </span>
                        </div>
                        <div className="header-top_right">
                            <ul className="follow-option">
                                <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="/"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="/"><i class="fa-brands fa-youtube"></i></a></li>
                                <li><a href="/"><i class="fa-brands fa-x-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo">
                <img src={img} alt="logo" />
            </div>
        </div>
    
    )   
}

export default Header