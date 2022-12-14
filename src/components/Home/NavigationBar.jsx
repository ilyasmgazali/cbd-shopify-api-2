import React from 'react'
//import css stylesheet
import '../../Styles/NavigationBar.css'
//import icons
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import HelpIcon from '@mui/icons-material/Help';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar } from '@mui/material';

// 
export default function NavigationBar() {
  return (
    /** Navigation */
    <nav className="nav">
        {/** Navigation top section*/}
        <div className='nav-top'>
            {/** Navigation top-left language section*/}
            <div className="nav-top-left">
                <LanguageIcon fontSize="medium"/>
                <h4 className="nav-tleft-link">English / United Kingdom</h4>
            </div>
            <div className="nav-top-right">
                <HelpIcon className="nav-tright-icon"/>
                <h4 className="nav-tright-link" >Customer Support</h4>
            </div>
        </div>
        {/** Navigation bottom section*/}
        <div className='nav-bottom'>
            {/** Navigation bottom-left section*/}
            <div className='nav-bottom-left'>
                <div className="nav-bleft-companyname">
                    <h2>CBD Joint</h2>
                </div>
                <div className="nav-bleft-cbdcategory">
                    <h4 className="nav-bleft-links">Vape</h4>
                    <h4 className="nav-bleft-links">Liquid</h4>
                    <h4 className="nav-bleft-links">Oil</h4>
                </div>
            </div> 
            {/** Navigation bottom-right section*/}
            <div className='nav-bottom-right'>
                <div className='nav-bright-search'>
                    <SearchIcon fontSize="medium"/>
                    <h4 className='nav-bright-link'>Search</h4>
                </div> 
                <div className='nav-bright-icons'>
                    {/* <AccountCircleIcon fontSize="large"/>*/}
                    <h4 className='nav-bright-seperator'> | </h4>
                    <FavoriteIcon className='nav-bright-link'/>
                    <ShoppingCartIcon fontSize="medium" className='nav-bright-link'/>
                    <Avatar src="" alt="user" sx={{ width: 28, height: 28}} className='nav-bright-link'/>   
                </div>
            </div> 
        </div>
    </nav>
  )
}