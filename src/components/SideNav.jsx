import { Box, Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function SideNav() {
    return (
        <Sidebar>
            <Menu>
                <MenuItem active icon={<DashboardIcon/>}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>
                <MenuItem active icon={<PeopleIcon/>}>
                    <Typography variant="body2">Employee</Typography>
                </MenuItem>
                <MenuItem active icon={<CalendarMonthIcon/>}>
                    <Typography variant="body2">Attendance</Typography>
                </MenuItem>
                <MenuItem active icon={<PaidIcon/>}>
                    <Typography variant="body2">Payroll</Typography>
                </MenuItem>
                <MenuItem active icon={<AdminPanelSettingsIcon/>}>
                    <Typography variant="body2">Setting</Typography>
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}

export default SideNav;