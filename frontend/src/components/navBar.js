import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "../styles/navBar.css";
import LogoPeque from "../img/solo_logo.png";
import { Link as LinkRouter } from 'react-router-dom';
import userActions from '../redux/actionsCreators/userActions';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {connect} from "react-redux";
import SignIn from "./signUp/signIn";
import SignUp from "./signUp/signUp";


const pages = [ <LinkRouter to="inicio" className="link">Home</LinkRouter>,  <LinkRouter to="cities" className="link">Cities</LinkRouter>]; 



const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const signOut = () => {

    props.SignOutUser(props.user.email)
    console.log(props.user.urlImage)

  } 


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="NavBar" >
      <Container maxWidth="xl" className="NavBar">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <div>
              <img src={LogoPeque} className="logoPeque"/>
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"   
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <div>
              <img src={LogoPeque} className="logoPeque"/>
            </div>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}                    
                sx={{ my: 2, marginLeft: "4vw", color: 'white', display: 'block', fontWeight:800, fontSize:"18px" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                {props.user ? (<Avatar alt="Remy Sharp" src={props.user.urlImage} />)
                 : <AccountCircle id="accountcircle"/> }
                
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', color: 'black' }}
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
              {props.user ? <> <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={signOut}  color="black" textAlign="center"> Sing Out </Typography>
                </MenuItem> </> : <>
                <MenuItem>
                  <Typography textAlign="center">
                  <LinkRouter  className="sign" to="/signIn">
                    Sign In
                    </LinkRouter>
                    </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                              
                    <LinkRouter  to="/signUp" className="sign">
                    Sign Up
                    </LinkRouter>
                    </Typography>
                </MenuItem>
                </>
                    
                
              }

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


const mapStateToProps = (state) => {

  return{
    user: state.userReducer.user,    
  }
  }
  
  const mapDispatchToProps = {
    SignOutUser: userActions.SignOutUser,

  }     
  
  export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
