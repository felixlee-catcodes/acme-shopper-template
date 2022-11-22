import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function BasicAppBar() {
  const anchor = "left";
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log("found the button");
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={"list-header"} disablePadding className=''>
          <ListItemButton>
            <ListItemText primary={"Intervals"} />
          </ListItemButton>
        </ListItem>
        <hr />
        {[
          { title: "Intervals 101", ref: "/intervals" },
          { title: "Major & Minor 7ths", ref: "/intervals/lesson1" },
        ].map((data, index) => (
          <Link key={index} className='menu-link' to={`/study${data.ref}`}>
            <ListItem disablePadding className='menu-list-item'>
              <ListItemButton>
                <ListItemText primary={data.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem key={"list-header"} disablePadding className=''>
          <ListItemButton>
            <ListItemText primary={"Chords"} />
          </ListItemButton>
        </ListItem>
        <hr />
        {[
          { title: "Chords101", ref: "/chords/intro" },
          { title: "Major & Minor Triads", ref: "/chords/lesson1" },
          { title: "7th Chords", ref: "/chords/lesson2" },
          { title: "Augmented & Diminished Chords", ref: "/chords/lesson3" },
        ].map((data, index) => (
          <Link key={index} className='menu-link' to={`/study${data.ref}`}>
            <ListItem disablePadding className='menu-list-item'>
              <ListItemButton>
                <ListItemText primary={data.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem key={"list-header"} disablePadding className='list-header'>
          <ListItemButton>
            <ListItemText primary={"Progressions"} className='' />
          </ListItemButton>
        </ListItem>
        <hr />
        {[
          { title: "Intro to Progressions", ref: "/progressions/intro" },
          { title: "Roman Numeral System", ref: "/progressions/lesson1" },
          { title: "I-V-I", ref: "/progressions/lesson2" },
          {
            title: "Augmented & Diminished progressions",
            ref: "/progressions/lesson3",
          },
        ].map((data, index) => (
          <ListItem key={index} disablePadding className='menu-list-item'>
            <ListItemButton>
              <Link className='menu-link' to={`/study${data.ref}`}>
                <ListItemText primary={data.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id='drawer?'
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link className='nav-link' to='/home'>
                Home
              </Link>
            </Typography>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
              onClick={toggleDrawer(anchor, true)}
            >
              <Link className='nav-link' to='/study'>
                Study
              </Link>
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
