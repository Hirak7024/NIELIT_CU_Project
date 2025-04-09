import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <div className='w-[full] h-[4rem] bg-cyan-400'>
      <ul className='w-full h-full flex gap-[2rem] items-center pl-[2rem]'>
        <li className='NavbarListItems' onClick={()=>navigate("/")}>Home</li>
        <li className='NavbarListItems'>About</li>
        <li>
          <div>
            <button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className='NavbarListItems'
              >
              Services 
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              >
              <MenuItem onClick={handleClose}>Therapy & Counseling</MenuItem>
              <MenuItem onClick={handleClose}>Mental Health Conditions</MenuItem>
              <MenuItem onClick={handleClose}>Self-Help & Wellness</MenuItem>
              <MenuItem onClick={handleClose}>Support Groups</MenuItem>
              <MenuItem onClick={handleClose}>Emergency Help</MenuItem>
            </Menu>
          </div>
        </li>
              <li className='NavbarListItems'>Resources</li>
              <li className='NavbarListItems'>Community</li>
              <li className='NavbarListItems'>Contact Us</li>
      </ul>
    </div>
  );
}
