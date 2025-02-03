import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

function MenuButton() {
  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
  )
}

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, padding: 0, margin: 0}}>
      <AppBar position="static" sx={{ padding: 0, margin: 0 }}>
        <Toolbar sx={{ padding: 0, margin: 0 }}>
          {/* Menu button */}
          <MenuButton/>
          {/* Logo or name */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>News</Typography>
          {/* Home button */}
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          {/* Saved button */}
          <Button color="inherit" component={RouterLink} to="/saved">Saved</Button>
        </Toolbar>
      </AppBar >
    </Box>
  );
}

{/*  */ }
  
{/*  */ }