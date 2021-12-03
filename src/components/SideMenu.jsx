import { useNavigate, Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styled from "styled-components"

const SideMenu = () => {
    return (
        <>
            <Box>
                <Drawer 
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { width: "10rem" },
                  }}
                >
                    <Toolbar />
                        <List>
                            {['Abonos', 'Adeudos', 'Carteras', 'Colaboradores'].map((text, index) => (
                                <Link to={`/${text}`}>
                                    <ListItem button key={text}>
                                        {text}
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                </Drawer>
            </Box> 
        </>
    )
    
}

export default SideMenu
