import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/styles'
import { Collapse, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader, SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const LoginButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


const useStyles = makeStyles(theme => ({
    appbar:{
        '&.css-1fy7nix-MuiPaper-root-MuiAppBar-root':{
            zIndex: theme.zIndex.modal + 1
        }
    },
    toolbar: {
        backgroundColor: theme.palette.primary.main
    },
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    tabs: {
        marginLeft: "auto"
    },
    tab: {
        textDecoration: "none",
        minWidth: 10,
        marginLeft: "25px"
    },
    menu: {
        backgroundColor: theme.palette.primary.main,
        width: "100%"
    },
    selectedMenu: {
        '&.css-1bcibf-MuiButtonBase-root-MuiMenuItem-root.Mui-selected': {
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            fontWeight: 600
        }
    },
    selectedListItem: {
        '&.css-jpy0wf-MuiButtonBase-root-MuiListItemButton-root.Mui-selected': {
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            fontWeight: 600
        }
    },
    brandName: {
        '&.css-ahj2mt-MuiTypography-root': {
            fontWeight: "700em",
            fontSize: "2.5em",
            [theme.breakpoints.down("md")]: {
                fontSize: "2em"
            }
        }
    },
    menuIconContainer: {
        '&.css-78trlr-MuiButtonBase-root-MuiIconButton-root': {
            backgroundColor: "transparent",
            marginLeft: "auto",
            "&:hover": {
                backgroundColor: "transparent"
            }
        }
    },
    drawerContainer:{
        '&.css-4t3x6l-MuiPaper-root-MuiDrawer-paper':{
            backgroundColor: theme.palette.primary.main
        }
        
    }
}))

export default function Header(props) {

    const theme = useTheme()
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [open, setOpen] = React.useState(false)
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const [openSubList, setOpenSublist] = React.useState(false)

    const matched = useMediaQuery(theme.breakpoints.down("md"))

    const menuItems = [{ to: "/Mobiles", name: "Mobiles" }, { to: "/Laptops", name: "Laptops" }, { to: "/Televisions", name: "Televisions" }]

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const handleChange = (event, newValue) => {
        props.setValue(newValue);
        props.setSelectedIndex(-1)
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpen(false)
        props.setSelectedIndex(i)
    }

    React.useEffect(() => {
        if (window.location.pathname == "/") {
            props.setValue(0)
        } else if (window.location.pathname == "/About") {
            props.setValue(2)
        } else if (window.location.pathname == "/Contact") {
            props.setValue(3)
        } else {
            menuItems.forEach((e, i) => {
                if (e.to == window.location.pathname) {
                    props.setValue(1)
                    props.setSelectedIndex(i)
                }
            })
        }
    }, [props.value,props.selectedIndex])

    const list = (
        <React.Fragment >
            <List
                
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                
                <ListItemButton to="/Home" onClick={()=>{props.setValue(0)}} component={Link} selected={props.value==0} classes={{ selected: classes.selectedListItem }}>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton onClick={()=>{setOpenSublist(!openSubList)}} selected={props.value==1} classes={{ selected: classes.selectedListItem }}>
                    <ListItemText primary="Products" />
                    {openSubList ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {menuItems.map((val, i) => {
                    const index = i
                        return  <ListItemButton key={val.name} to={val.to} component={Link} classes={{ selected: classes.selectedListItem }}  selected={props.selectedIndex==index} onClick={e => {
                            handleMenuItemClick(e, index);
                            props.setValue(1)
                        }
                        }>
                            <ListItemText primary={val.name} />
                        </ListItemButton>
                    })
                    }
                    </List>
                </Collapse>
                <ListItemButton to="/About" onClick={()=>{props.setValue(2)}} component={Link} selected={props.value==2} classes={{ selected: classes.selectedListItem }}>
                    <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton to="/Contact" onClick={()=>{props.setValue(3)}} component={Link} selected={props.value==3} classes={{ selected: classes.selectedListItem }}>
                    <ListItemText primary="Contact Us" />
                </ListItemButton>
            </List>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                classes={{paper:classes.drawerContainer}}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)}
            >
                <div className={classes.toolbarMargin} />
                {list}
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} classes={{ root: classes.menuIconContainer }}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )



    const tabs = (
        <React.Fragment>
            <Tabs
                className={classes.tabs}
                value={props.value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab className={classes.tab} label="Home" component={Link} to="/" />
                <Tab
                    aria-owns={anchorEl ? "products-menu" : undefined}
                    aria-haspopup={anchorEl ? true : undefined}
                    onMouseOver={event => handleClick(event)}
                    className={classes.tab}
                    label="Products"
                    component={Link}
                    to="/Products"
                />
                <Tab className={classes.tab} label="About" component={Link} to="/About" />
                <Tab className={classes.tab} label="Contact Us" component={Link} to="/Contact" />
            </Tabs>

            <Menu
                id="products-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => { handleClose(); props.setValue(1) }}
                MenuListProps={{ onMouseLeave: handleClose }}
                elevation={0}
                classes={{ list: classes.menu }}
            >
                {menuItems.map((val, i) => {
                    const index = i
                    return <MenuItem
                        key={val.name}
                        classes={{ selected: classes.selectedMenu }}
                        onClick={e => {
                            handleMenuItemClick(e, index);
                            props.setValue(1)
                            handleClose()
                        }
                        }
                        component={Link}
                        to={val.to}
                        selected={i == props.selectedIndex ? true : false}
                        divider={false}
                    >
                        {val.name}
                    </MenuItem>
                })}
            </Menu>
            <LoginButton color="secondary" variant="contained" >Login/Register</LoginButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <AppBar position="fixed" elevation={0} classes={{root:classes.appbar}}>
                <Toolbar className={classes.toolbar}>
                    <Typography classes={{ root: classes.brandName }}>Electronics</Typography>
                    {matched ? drawer : tabs}
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </React.Fragment>

    )
}