import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function AppHeader() {
    return (<AppBar position="sticky" sx={styles.appBar}>
        <Toolbar>
            <IconButton onClick={() => console.log('clicked')} color="secondary">
                <MenuIcon></MenuIcon>
            </IconButton>
            <Box
                component="img"
                sx={styles.appLogo}
                src="/src/assets/siriusLogo.png" />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton title="Notifications" color="secondary">
                <Badge badgeContent={14} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton title="Setting" color="secondary">
                <SettingsIcon>

                </SettingsIcon>
            </IconButton>
            <IconButton title="Logout" color="secondary">
                <LogoutIcon>

                </LogoutIcon>
            </IconButton>
        </Toolbar>
    </AppBar>);
}


/**@type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: "neutral.main"
    },
    appLogo: {
        borderRadius: 2,
        width: 80,
        ml: 2,
        cursor: "pointer"
    }
}

export default AppHeader;