import { useLocation } from "react-router-dom";
import IconifyIcon from "components/base/IconifyIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material";
import Link from "@mui/material/Link";

interface navLinkProps {
    path: string, 
    name: string, 
    icon: string
}

const NavLink = (props: navLinkProps) => {
    const { name, path, icon } = props;
    const theme = useTheme();
    // check the path is active or not
    const isActivePath = useLocation().pathname.split('/')[1] === path;

    return (
        <Link href={`/${path}`}>
            <ListItemButton sx={{boxShadow: isActivePath ? theme.customShadows[0] : null}}>
                <ListItemIcon sx={(theme) => ({bgcolor: isActivePath ? theme.palette.primary.main : 'transparent'})}>
                    <IconifyIcon icon={`ion:${icon}`} sx={(theme) => ({color: isActivePath ? '#fff' : theme.palette.primary.main, fontSize: '1rem'})}/>
                </ListItemIcon>
                <ListItemText sx={{color: isActivePath ? 'grey.700' : 'grey.400'}}>{name}</ListItemText>
            </ListItemButton>
        </Link>
    );
}

export default NavLink;