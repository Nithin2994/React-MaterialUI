import React from 'react'
import { makeStyles, propsToClassKey } from '@mui/styles';
import { Grid, Hidden, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor: theme.palette.primary.main,
        height:"10em",
        zIndex: 1320,
        position:"relative",
        [theme.breakpoints.down("md")]:{
            height:"8em",
        },
        [theme.breakpoints.down("sm")]:{
            height:"6em",
        }
    },
    Link:{
        '&.css-13i4rnv-MuiGrid-root':{
            color:"black",
            textDecoration:"none"
        }
        
    }
}))

export default function Footer(props){

    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden smDown>
            <Grid container direction="row" spacing={2} justifyContent="center" alignItems="flex-start">
               <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/Home" classes={{root:classes.Link}} onClick={()=>{props.setValue(0)}}>Home</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/Services" classes={{root:classes.Link}} onClick={()=>{props.setValue(1)}}>Services</Grid>
                        <Hidden mdDown>
                        <Grid item component={Link} to="/Database" classes={{root:classes.Link}} onClick={()=>{props.setValue(1);props.setSelectedIndex(0)}}>Database</Grid>
                        <Grid item component={Link} to="/Storage" classes={{root:classes.Link}} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}}>Storage</Grid>
                        <Grid item component={Link} to="/Caching" classes={{root:classes.Link}} onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}>Caching</Grid>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/About" classes={{root:classes.Link}} onClick={()=>{props.setValue(2)}}>About</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/Contact" classes={{root:classes.Link}} onClick={()=>{props.setValue(3)}}>Contact Us</Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            
        </footer>
    )
}