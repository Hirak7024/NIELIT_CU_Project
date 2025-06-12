import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { servicesItem } from '../Data/ServicesItem';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <div className={`flex w-full justify-between px-[2rem] py-[1.5rem] fixed top-0 left-0 z-200 ${scrolled? 'bg-white shadow-md': ''}`}>
            <div className='flex items-center justify-center gap-[1rem]'>
                <img src="./Assets/MantraIcon.png" alt="" className='w-[2.2rem] h-[2.2rem] object-cover' />
                <h1 className='text-[32px] font-[600] text-[#35405F] lora cursor-pointer' onClick={()=>navigate("/")}>Mantra Health</h1>
            </div>
            <div className='flex gap-[2rem]'>
                <ul className='flex gap-[2rem] items-center'>
                    <li className='text-[18px] text-[#1D2744] font-[600] cursor-pointer hover:text-[#2B59E3]'
                    onClick={()=>navigate("/solutions")}>Our Solutions</li>
                    <li>
                        <Stack direction="row" spacing={2}>
                            <div>
                                <Button
                                    ref={anchorRef}
                                    id="composition-button"
                                    aria-controls={open ? 'composition-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                    sx={{fontSize:"18px",fontWeight:"600", cursor:"pointer", textTransform:"none"}}
                                >
                                    Services <MdOutlineKeyboardArrowDown className='text-[18px]'/>
                                </Button>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleListKeyDown}
                                                    >{
                                                        servicesItem?.map((item,key)=>(
                                                            <MenuItem onClick={handleClose} key={key} sx={{py:1.5}} >{item}</MenuItem>
                                                        ))
                                                    }
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        </Stack>



                    </li>
                    {/* <li className='text-[18px] text-[#1D2744] font-[600] cursor-pointer hover:text-[#2B59E3]'>Blog</li> */}
                    <li className='text-[18px] text-[#1D2744] font-[600] cursor-pointer hover:text-[#2B59E3]'>Resources</li>
                    <li className='text-[18px] text-[#1D2744] font-[600] cursor-pointer hover:text-[#2B59E3]'>About Us</li>
                </ul>
                <div className='flex gap-[1rem] items-center'>
                    <Button variant="contained" sx={{ width: "10rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#819DF833", color: "#2B59E3", }}>Login</Button>
                    <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>Get in Touch</Button>
                </div>
            </div>
        </div>
    )
}
