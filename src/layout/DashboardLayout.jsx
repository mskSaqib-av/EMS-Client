import React, {useContext} from "react";
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import { Menu as MenuIcon, Logout } from "@mui/icons-material";

const drawerWidth = 220;

export default function DashboardLayout({ children }) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f6fa" }}>
      {/* Sidebar */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            transition: "0.3s",
          },
        }}
      >
        <Toolbar />
        <List>
          {["Dashboard", "Employees", "Leaves", "Overtime", "Reports"].map(
            (text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      {/* Main Content with Topbar */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s",
          marginLeft: open ? `${drawerWidth}px` : "0px",
        }}
      >
        {/* Top Navbar */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "primary.main",
            transition: "width 0.3s, margin 0.3s",
            //width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
            //ml: open ? `${drawerWidth}px` : "0px",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(!open)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button
              color="inherit"
              startIcon={<Logout />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Actual Page Content */}
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
