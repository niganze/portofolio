import React from "react";
import { Link, Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {Typography,Grid,Paper,List,ListItem,ListItemText,IconButton,AppBar,Toolbar,Button,} from "@material-ui/core";
import { AccountCircle, Notifications} from "@material-ui/icons";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  sidebar: {
    width: drawerWidth,
    flexShrink: 0,
  },
  sidebarPaper: {
    width: drawerWidth,
    background: "#white",
    color: "FFF",
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    height: 200,
    background: "linear-gradient(to right, #FF5F6D, #FFC371)",
    color: "white",
  },

  iconsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    color: "#FFF",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ background: "#6ab2fd" }}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Dashboard
        </Typography>

        <Button color="inherit">Home</Button>
        <Button color="inherit">Add More</Button>
        <IconButton edge="start" color="inherit">
          <Notifications />
        </IconButton>
        <IconButton edge="start" color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.sidebar}>
        <Paper elevation={3} className={classes.sidebarPaper}>
          <Typography variant="h6">Menu</Typography>
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Home dashbord " />
            </ListItem>
            <ListItem button>
              <Link to="expertness">
                <ListItemText primary="Tools Expertness" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="skills">
                {" "}
                <ListItemText primary="Skills" />{" "}
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Qulification" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Project mamagement" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Expert Technician " />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Message management "/>
            </ListItem>
            <ListItem button>
              <ListItemText primary=" Blog Post site" />
            </ListItem>
            <ListItem button>
              <ListItemText primary=" Blog Post site" />
            </ListItem>
            <ListItem button>
              <ListItemText primary=" Update and more notification " />
            </ListItem>
            <ListItem button>
              <ListItemText primary=" Blog Post site" />
            </ListItem>
          </List>
        </Paper>
      </div>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
