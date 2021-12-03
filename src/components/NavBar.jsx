
import { FaCog, FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import styled from "styled-components";
import Toolbar from '@mui/material/Toolbar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';

const NavBar = () => {
    const nav = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        nav("/")
    }

    return (
        <>
         <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
                    <Toolbar style={{ backgroundColor: "#FFBF00" }}>
                        <AppBarContainer>
                            <Img />
                            <FaCog size="20" onClick={handleClick} style={{ cursor: "pointer", color: "white" }} />
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={logout}>
                                    <ListItemIcon>
                                        <FaSignOutAlt fontSize="small" />
                                    </ListItemIcon>
                                    Cerrar sesión
                                </MenuItem>
                            </Menu>
                        </AppBarContainer>
                    </Toolbar>
                </AppBar>   
        </>
    )
}

const Img = styled.div`
        background-image: url('../logo.png');
        background-size: cover;
        background-position: center;
        width: 6rem;
        height: 3rem;
    `;

const AppBarContainer = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center
    `;

export default NavBar
