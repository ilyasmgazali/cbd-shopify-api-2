import React from 'react'
//import stylesheet
import Navigation from '../../Styles/Navigation'
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
                <h4>English / United Kingdom</h4>
            </div>
            <div className="nav-top-right">
                <HelpIcon/>
                <h4>Customer Care</h4>
            </div>
        </div>
        {/** Navigation bottom section*/}
        <div className='nav-bottom'>
            {/** Navigation bottom-left section*/}
            <div className='nav-bottom-left'>
                <div className="nav-bleft-companyname">
                    <h2>CBD JOINT</h2>
                </div>
                <div className="nav-bleft-cbdcategory">
                    <h4>Vape</h4>
                    <h4>Liquid</h4>
                    <h4>Oil</h4>
                </div>
            </div> 
            {/** Navigation bottom-right section*/}
            <div className='nav-bottom-right'>
                <div className='nav-bright-search'>
                    <SearchIcon fontSize="medium"/>
                    <h4>Search</h4>
                </div>
                    {/* <AccountCircleIcon fontSize="large"/>*/}
                    <FavoriteIcon/>
                    <PermIdentityIcon fontSize="medium"/>
                    <ShoppingCartIcon fontSize="medium"/>
                    <Avatar src="" alt="user" sx={{ width: 28, height: 28}}/>   
            </div> 
        </div>
    </nav>
  )
}