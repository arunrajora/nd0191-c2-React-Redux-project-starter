import { AppBar, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectLoggedInUser } from '../store/authedUserSlice';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Add', path: '/add' },
  { name: 'Leaderboard', path: '/leaderboard' },
];

function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Employee Poll
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem
                  key={path}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={path}
                >
                  <Typography textAlign='center'>{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Employee Poll
          </Typography>
          <Stack
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 5 }}
            direction='row'
            justifyContent='flex-end'
          >
            {pages.map(({ name, path }) => (
              <Button
                key={path}
                component={NavLink}
                to={path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: 'underline',
                        textUnderlineOffset: '10px',
                      }
                    : undefined
                }
              >
                {name}
              </Button>
            ))}
          </Stack>
          {loggedInUser && (
            <>
              <Avatar alt={loggedInUser.name} src={loggedInUser.avatarURL} />
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  dispatch(logout());
                  navigate('/');
                }}
                sx={{ my: 2, color: 'red', display: 'block' }}
              >
                LOGOUT
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
