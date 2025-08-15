import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';

import { MdOutlineShoppingCart } from "react-icons/md";
import { Navigation } from './Navigation';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));






const Header = () => {
    return (
        <header>
            <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
                <div className="container">
                    <div className="flex items-center justify-between">

                        <div className="col1 w-[50%]">
                            <div className="text-[14px] font-[500]">
                                Get up to 50% off new season styles, limited time
                            </div>
                        </div>

                   
                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-3">
                                <li className="list-none">
                                    <Link to="/help-center" className="text-[12px] link font-[500] transition">Help Center</Link>
                                </li>


                                <li className="list-none">
                                    <Link to="/order-tracking" className="text-[12px] link font-[500] transition">Order Tracking</Link>
                                </li>
                            </ul>


                        </div>
                    </div>



                </div>
            </div>

            <div className=" header py-4 border-2 border-gray-200">
                <div className="container flex gap-1 1items-center justify-between">
                    <div className="col1 w-[20%]">
                        <Link to={"/"}><img src='/logo.jpg' /></Link>
                    </div>

                    <div className="col2 w-[45%]">
                        <Search />
                    </div>

                         <div className="col3 w-[30%] flex items-center pl-5">

                        <ul className='flex items-center gap-3'> 
                            <li className="list-none">
                                <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link> | &nbsp; 
                                <Link className="link transition text-[15px] font-[500]" to="/register">Register</Link>
                            </li>

                             <li>
                                <Tooltip title="Compare" placement="top">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                   <IoGitCompareOutline />
                                   



                                    </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>

                             <li>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                       <FaRegHeart />

                                    </StyledBadge>
                                </IconButton>
                            </li>

                             <li>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                       <MdOutlineShoppingCart />

                                    </StyledBadge>
                                </IconButton>
                            </li>
                        </ul>
                        </div>
                    
               

                </div>

            </div>

            <Navigation/>
        </header>
    )
}

export default Header