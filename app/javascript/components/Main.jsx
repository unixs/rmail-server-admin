import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {
  AppBar,
  Button,
  Container, Drawer,
  IconButton,
  List,
  ListItem, ListItemIcon, ListItemText,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Domains() {
  const [domains, setDomains] = useState([]);

  useEffect(async () => {
    const response = await fetch('domains')
      .then(r => r.json());
    console.log(response);

    setDomains(response);
  }, []);

  return (<React.Fragment>
    <ul>
      {
        domains.map((d, idx) => (<li key={idx}>{d.domain}</li>))
      }
    </ul>
  </React.Fragment>);
}

function Main() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (<React.Fragment>
    <Container disableGutters={true} maxWidth={'lg'}>
      <AppBar position="static">

        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RMail admin
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <List>
          {['Domains'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      Domains:
      <Domains />

    </Container>
  </React.Fragment>);
}

export default Main;
