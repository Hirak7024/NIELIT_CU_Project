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
import { Context } from '../Utils/Context';

export default function Navbar() {
    const { loggedInUser, setLoggedInUser } = React.useContext(Context);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser({
            Name: "",
            Email: "",
            SessionId: ""
        })
    }

    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Services dropdown
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => setOpen(prev => !prev);
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) return;
        setOpen(false);
    };
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) anchorRef.current.focus();
        prevOpen.current = open;
    }, [open]);

    // Resources dropdown
    const [open2, setOpen2] = React.useState(false);
    const anchorRef2 = React.useRef(null);
    const handleToggle2 = () => setOpen2(prev => !prev);
    const handleClose2 = (event) => {
        if (anchorRef2.current && anchorRef2.current.contains(event.target)) return;
        setOpen2(false);
    };
    const prevOpen2 = React.useRef(open2);
    React.useEffect(() => {
        if (prevOpen2.current === true && open2 === false) anchorRef2.current.focus();
        prevOpen2.current = open2;
    }, [open2]);

    const handleNavigate = (path) => {
        navigate(path);
        setOpen2(false);
    };

    return (
        <div className={`flex w-full justify-between px-[2rem] py-[1.5rem] fixed top-0 left-0 z-200 ${scrolled ? 'bg-white shadow-md' : ''}`}>
            <div className='flex items-center justify-center gap-[1rem]'>
                <img src="./Assets/MantraIcon.png" alt="" className='w-[2.2rem] h-[2.2rem] object-cover' />
                <h1 className='text-[32px] font-[600] text-[#35405F] lora cursor-pointer' onClick={() => navigate("/")}>Mantra Health</h1>
            </div>

            <div className='flex gap-[2rem]'>
                <ul className='flex gap-[2rem] items-center'>
                    <li className='text-[18px] text-[#1D2744] font-[600] cursor-pointer hover:text-[#2B59E3]' onClick={() => navigate("/solutions")}>Our Solutions</li>

                    {/* Services Dropdown */}
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
                                    sx={{ fontSize: "18px", fontWeight: "600", cursor: "pointer", textTransform: "none" }}
                                >
                                    Services <MdOutlineKeyboardArrowDown className='text-[18px]' />
                                </Button>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}>
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button">
                                                        {servicesItem?.map((item, key) => (
                                                            <MenuItem key={key} onClick={handleClose} sx={{ py: 1.2 }}>{item}</MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        </Stack>
                    </li>

                    {/* Resources Dropdown */}
                    <li>
                        <Stack direction="row" spacing={2}>
                            <div>
                                <Button
                                    ref={anchorRef2}
                                    id="resources-button"
                                    aria-controls={open2 ? 'resources-menu' : undefined}
                                    aria-expanded={open2 ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle2}
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        textTransform: "none",
                                        color: "#1D2744",
                                        '&:hover': { color: '#2B59E3' }
                                    }}
                                >
                                    Resources <MdOutlineKeyboardArrowDown className='text-[18px]' />
                                </Button>
                                <Popper open={open2} anchorEl={anchorRef2.current} role={undefined} placement="bottom-start" transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}>
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose2}>
                                                    <MenuList autoFocusItem={open2} id="resources-menu" aria-labelledby="resources-button">
                                                        <MenuItem sx={{ py: 1.2 }} onClick={() => handleNavigate("/resources_mental_health_programs")}>
                                                            Mental Health Programs
                                                        </MenuItem>
                                                        <MenuItem sx={{ py: 1.2 }} onClick={() => handleNavigate("/resources_student_mental_health")}>
                                                            Student Mental Health
                                                        </MenuItem>
                                                        <MenuItem sx={{ py: 1.2 }} onClick={handleClose2}>
                                                            Blog
                                                        </MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        </Stack>
                    </li>

                    <li className='text-[18px] text-[#1D2744] font-[600] cursor-pointer hover:text-[#2B59E3]'>About Us</li>
                </ul>

                <div className='flex gap-[1rem] items-center'>
                    {loggedInUser?.SessionId ?
                        <Button variant="contained" sx={{ width: "10rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#819DF833", color: "#2B59E3", }} onClick={handleLogOut}>Logout</Button>
                        :
                        <Button variant="contained" sx={{ width: "10rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#819DF833", color: "#2B59E3", }} onClick={() => navigate("/login")}>Login</Button>
                    }
                    <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>Get in Touch</Button>
                </div>
            </div>
        </div>
    );
}
