import * as React from "react";
import "./style/BasicMenu.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import Projects from "./Projects";
import { Link } from "react-scroll";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import MoodIcon from "@mui/icons-material/Mood";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const drawerWidth = 240;

function BasicMenu(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Profile", "Projects"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              to={text}
              smooth={true}
              spy={true}
              offset={-70}
              duration={500}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AccountCircleIcon /> : <AppsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About Me", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              to={text}
              smooth={true}
              spy={true}
              offset={-70}
              duration={500}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoodIcon /> : <ContactMailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <div className="content-container">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Welcome To Stavros Charitos Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: "#f4f2ee",
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Grid container spacing={30}>
              <Grid item xs={12} sm={6}>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                  sit amet volutpat consequat mauris. Elementum eu facilisis sed
                  odio morbi. Euismod lacinia at quis risus sed vulputate odio.
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus
                  orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                  morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                  quis eleifend. Commodo viverra maecenas accumsan lacus vel
                  facilisis. Nulla posuere sollicitudin aliquam ultrices
                  sagittis orci a.
                </Typography>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                  sit amet volutpat consequat mauris. Elementum eu facilisis sed
                  odio morbi. Euismod lacinia at quis risus sed vulputate odio.
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus
                  orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                  morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                  quis eleifend. Commodo viverra maecenas accumsan lacus vel
                  facilisis. Nulla posuere sollicitudin aliquam ultrices
                  sagittis orci a.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Avatar
                  alt="Stavros Charitos"
                  src="/src/assets/me.jpg"
                  sx={{ width: 400, height: 400 }}
                />
              </Grid>
            </Grid>
            <Box
              id="Projects"
              component="main"
              sx={{
                flexGrow: 1,
                p: 0,
                m: 0,
                width: "100%",
              }}
            >
              <AppBar
                position="static"
                sx={{
                  width: "100%",
                }}
              >
                <Toolbar>
                  <Typography variant="h6" noWrap component="div">
                    Projects
                  </Typography>
                </Toolbar>
              </AppBar>
              <Projects />
            </Box>
            <Box
              id="About Me"
              component="main"
              sx={{
                flexGrow: 1,
                p: 0,
                m: 0,
                width: "100%",
              }}
            >
              <AppBar
                position="static"
                sx={{
                  width: "100%",
                }}
              >
                <Toolbar>
                  <Typography variant="h6" noWrap component="div">
                    About Me
                  </Typography>
                </Toolbar>
              </AppBar>
              <AboutMe />
            </Box>
            <Box
              id="Contact"
              component="main"
              sx={{
                flexGrow: 1,
                p: 0,
                m: 0,
                width: "100%",
              }}
            >
              <AppBar
                position="static"
                sx={{
                  width: "100%",
                }}
              >
                <Toolbar>
                  <Typography variant="h6" noWrap component="div">
                    Contact
                  </Typography>
                </Toolbar>
              </AppBar>
              <Contact />
            </Box>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default BasicMenu;
