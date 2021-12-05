import { useNavigate, Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styled from "styled-components"

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 700;
`;

const ListItemStyled = styled(ListItem)`
    height: 3rem;
`;

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
                            {['Adeudos', 'Colaboradores'].map((text, index) => (
                                <LinkStyled
                                to={`/${text}`}>
                                    <ListItemStyled button key={text}>
                                        {text}
                                    </ListItemStyled>
                                </LinkStyled>
                            ))}
                        </List>
                </Drawer>
            </Box> 
        </>
    )
    
}

export default SideMenu
