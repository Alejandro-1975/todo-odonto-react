import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import MenuListComposition from './MenuList'

const useStyles = makeStyles((theme) => ({
  toolbar:{
    backgroundColor: '#00263A',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '0 12px',
    border: '1px solid white',
    padding: '3px 6px',
    borderRadius: '6px',
    margin:'3px 3px auto'
         
  },
  img: {
    width:'25%',
    display: 'flex',
  }
  
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
           
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
              <img src="/images/logos/todoodonto-2.jpg"className={classes.img}/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
                   
              </div>
          
           
                  <Typography >     
                      <Link to="/nosotros"className={classes.link}>Nosotros</Link>   
                  </Typography>  
                  <Typography>   
                      <Link to="/"className={classes.link}>Página Principal</Link>   
                 </Typography>  
                 <Typography> 
                     <Link to="/capacitaciones"className={classes.link}>Capacitacion</Link>                                          
                     <Link to="/insumos"className={classes.link}>Insumos</Link>
                     <Link to="/equipamiento"className={classes.link}>Equipamiento</Link>
                     <Link to="/libreria"className={classes.link}>Libros</Link>
                     <Link to="/instrumental"className={classes.link}>Instrumental</Link>               
                     <Link to="/software"className={classes.link}>Software</Link>
                     <Link to="/rh"className={classes.link}>Recursos Humanos</Link>
                     <Link to="/alquileres-usados"className={classes.link}>Clasificados</Link>
                     <Link to="/youtube"className={classes.link}>Canales de Youtube</Link>
                     <Link to="/blogs"className={classes.link}>Blogs</Link>
                   </Typography> 
                   <Typography>  
                      <Link to="/contacto"className={classes.link}>Contacto</Link>
                      <Link to="/insumos-subcat"className={classes.link}>InsumosSubCat</Link>
                   </Typography>  
                 
          </Typography>
          <MenuListComposition />
          
              
              <MenuIcon />  
              
        </Toolbar>
      </AppBar>
    </div>
  );
}