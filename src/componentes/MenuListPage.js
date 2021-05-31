import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { positions } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {
    
   
  },
  menulist: {
    zIndex: '50',
},

button:{
    color: 'white',
    
}

}));

export default function MenuListComposit() {
  const classes = useStyles();
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
    <div className={classes.root}>
            
      <div>
        <Button className={classes.button}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Menu Categorias Principales
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.menu}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={classes.menulist} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                    <MenuItem onClick={handleClose}>Compras Odontología
                         <Link to="/insumos"className={classes.link}>Insumos</Link>
                         <Link to="/equipamiento"className={classes.link}>Equipamiento</Link>
                         <Link to="/instrumental"className={classes.link}>Instrumental</Link> 
                         <Link to="/software"className={classes.link}>Software</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/capacitaciones"className={classes.link}>Capacitacion</Link> 
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/libreria"className={classes.link}>Libros</Link>
                        <Link to="/alquileres-usados"className={classes.link}>Clasificados</Link>             
                        <Link to="/rh"className={classes.link}>Recursos Humanos</Link>
                        <Link to="/youtube"className={classes.link}>Canales de Youtube</Link>
                        <Link to="/blogs"className={classes.link}>Blogs</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}