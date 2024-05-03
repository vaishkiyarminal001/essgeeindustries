import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import langs from "../assets/2.png";
import Menu from '@mui/material/Menu';
import "./Navbar.css";
import { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContextProvide';

const pages = ['Home', 'About', 'Product', 'Blog', 'Contact'];
const language = ['English', 'Japanese'];

function Navbar() {

  let page1 = [
    {
      title: '家',
      path: '/'
    },

    {
      title: 'について',
      path: '/about'

    },

    {
      title: '製品',
      path: '/product'

    },

    {
      title: 'ブログ',
      path: '/blog'

    },

    {
      title: '接触',
      path: '/contact'

    },
  ]


  const { lang, setLang } = useContext(MyAuthContext);


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (selectedLanguage) => {
    setAnchorElUser(null);
    if (selectedLanguage === 'English') {
      setLang(false);
    } else {
      setLang(true);
    }
  };


  // english mode

  if(!lang){

    return (
      <div className='NavNew'>
      <AppBar 
        style={{position: 'fixed', top: 0, zIndex: 1000, backgroundImage: "linear-gradient(to left, #D0F6FF 0%, #FFEDED 48%, #FFFFE7 100%)" }} // Make navbar sticky
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleOpenNavMenu}
              sx={{ mr: 2, display: { xs: 'block', md: 'none', color: 'black' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center', // Align logo vertically
                flexGrow: 1,
                color: 'inherit',
                textDecoration: 'none',
                justifyContent: { xs: 'center', md: 'flex-start' }, // Center logo on mobile, align left on larger screens
              }}
            >
              <img src={logo} alt="Logo" style={{ height: '80px', marginRight: '5px' }} />
            </Box>
  
            {/* menu  */}
            <Box sx={{ display: { xs: 'none', md: 'flex', mx: 1 } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={RouterLink}
                  to={"/" + page.toLowerCase()}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: 'black',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#f0f0f0', // Change background color on hover
                      color: '#0093dd', // Change text color on hover
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
  
            {/* change language */}
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Change Languages">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src={langs} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {language.map((lang) => (
                   <MenuItem key={lang} onClick={() => handleCloseUserMenu(lang)}>
                   <Typography textAlign="center">{lang}</Typography>
                 </MenuItem>

                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'top',
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
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu} component={RouterLink} to={"/" + page.toLowerCase()}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
      </div>
    );

  }


   // Japanese mode
return (
  <div className='NavNew'>
    <AppBar
      style={{ position: 'fixed', top: 0, zIndex: 1000, backgroundImage: "linear-gradient(to left, #D0F6FF 0%, #FFEDED 48%, #FFFFE7 100%)" }} // Make navbar sticky
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2, display: { xs: 'block', md: 'none', color: 'black' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Align logo vertically
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: { xs: 'center', md: 'flex-start' }, // Center logo on mobile, align left on larger screens
            }}
          >
            <img src={logo} alt="Logo" style={{ height: '80px', marginRight: '5px' }} />
          </Box>

          {/* menu  */}
          <Box sx={{ display: { xs: 'none', md: 'flex', mx: 1 } }}>
            {page1.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                sx={{
                  my: 2,
                  mx: 1,
                  color: 'black',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#f0f0f0', // Change background color on hover
                    color: '#0093dd', // Change text color on hover
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* change language */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Change Languages">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src={langs} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu(lang)}
            >
              {language.map((lang) => (
                <MenuItem key={lang} onClick={() => handleCloseUserMenu(lang)}>
                  <Typography textAlign="center">{lang}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
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
        {page1.map((page) => (
          <MenuItem key={page.title} onClick={handleCloseNavMenu} component={RouterLink} to={page.path}>
            <Typography textAlign="center">{page.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  </div>
);

  
}


  


export default Navbar;