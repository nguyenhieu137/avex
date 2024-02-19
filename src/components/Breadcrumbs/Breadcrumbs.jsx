import React from 'react'
import './breadcrumbs.scss'
import {useLocation, Link} from 'react-router-dom'

function Breadcrumbs() {  
    
    const location = useLocation() 
    let currentLink = ''


    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink =+ `/${crumb}`

            return(
                <div className='crumb' key={crumb}>
                    <div className="crumb-title">
                        <h1>{decodeURIComponent(crumb)}.</h1>
                    </div>
                    <div className='crumb-link'>
                        <Link to = '/' className='home-link'>Home</Link>
                        <p>/</p>
                        <Link className='current-link' to = {currentLink}>{decodeURIComponent(crumb)}.</Link>
                    </div>
                </div>
            )
        })
    return (
        <div className='breadcrumbs'>
            <div className="breadcrumbs-img">
                <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/bg_breadcrumb.jpg?1665478617114" alt="" />
            </div>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs