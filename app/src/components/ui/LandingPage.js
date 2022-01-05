import React from 'react'
import { makeStyles, styled, withTheme, useTheme } from '@mui/styles'
import { Button, Grid, Paper, Skeleton, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    CardStyle: {
        backgroundColor: theme.palette.primary.main
    },
    BigCard:{
        maxWidth:"350em"
    }
}))

const MarginGridItem = styled(Grid)({
    '& .MuiGrid-root': {
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "2%",
        marginRight: "2%"
    }
})

const TextDescGridItem = styled(withTheme(Grid))(props => ({
    maxWidth: "50em",
    [props.theme.breakpoints.down("lg")]: {
        maxWidth: "35em"
    },
    [props.theme.breakpoints.down("md")]: {
        maxWidth: "20em"
    },
    [props.theme.breakpoints.down("sm")]: {
        maxWidth: "15em"
    }
}))



export default function LandingPage(props) {

    const classes = useStyles()
    const theme = useTheme()
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfQxcbWpv3U-n1CLxgPswDAeQqsyqyvwQNg&usqp=CAU"
    const downSM = useMediaQuery(theme.breakpoints.down("sm"))

    const DUMMY = (width => <img src={img} width={width}/>)

    return (
        <React.Fragment>
            <Grid container direction="column" spacing={4}>
                <MarginGridItem item container direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h3">Welcome</Typography>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.BigCard} elevation={0}>
                            {DUMMY("350em")}
                        </Paper>

                    </Grid>
                </MarginGridItem>
                <MarginGridItem item container direction="row" alignItems="center" justifyContent={downSM ? "center" : "flex-start"}>

                    <Grid item md={3}>
                        <Paper className={classes.CardStyle} elevation={0}>
                        {DUMMY("250em")}
                        </Paper>

                    </Grid>

                    <TextDescGridItem item md={7}>
                        <Typography variant="h6">DataBase</Typography>
                        <Typography variant="body">sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda. sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda. wbda. sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda</Typography>
                        <br/><Button component={Link} to="/Database" onClick={()=>{props.setValue(1);props.setSelectedIndex(0)}}><Typography variant="overline" >Learn More ...</Typography></Button>
                    </TextDescGridItem>

                </MarginGridItem>
                <MarginGridItem item container direction="row" justifyContent={downSM ? "center" : "flex-end"} alignItems="center">

                    {downSM && <Grid item md={3}>
                        <Paper className={classes.CardStyle} elevation={0}>
                            {DUMMY("250em")}
                        </Paper>

                    </Grid>}
                    <TextDescGridItem item md={7}>
                        <Typography variant="h6">Storage</Typography>

                        <Typography variant="body">sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda. sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda. wbda. sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda</Typography>
                        <br/><Button component={Link} to="/Storage" onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}}><Typography variant="overline" >Learn More ...</Typography></Button>
                    </TextDescGridItem>
                    {!downSM && <Grid item md={3}>
                        <Paper className={classes.CardStyle} elevation={0}>
                        {DUMMY("250em")}
                        </Paper>

                    </Grid>}
                </MarginGridItem>
                <MarginGridItem item container direction="row" justifyContent={downSM ? "center" : "flex-start"} alignItems="center">

                    <Grid item md={3}>
                        <Paper className={classes.CardStyle} elevation={0}>
                        {DUMMY("250em")}
                        </Paper>

                    </Grid>
                    <TextDescGridItem item md={7}>
                        <Typography variant="h6">Caching</Typography>
                        <Typography variant="body">sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda. sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda. wbda. sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda</Typography>
                        <br/><Button component={Link} to="/Caching" onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}><Typography variant="overline" >Learn More ...</Typography></Button>
                    </TextDescGridItem>
                </MarginGridItem>
                <MarginGridItem item container direction="row" justifyContent="center" alignContent="center">
                    <Paper sx={{width:"100%",margin:"5%"}} elevation={10}>
                    <Typography variant="h3" align="center">Free Services</Typography>
                    <Grid item container direction="row" justifyContent="space-evenly">
                        {
                            ["Logging", "Monitoring", "Alerting"].map((v,i) => {
                                return <Grid item container direction="column" xs={6} sm={4} md={4} lg={2}>
                                    <Grid item>
                                        <Paper elevation={0} className={classes.CardStyle}>
                                            {DUMMY("250em")}
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Typography>{v}</Typography>
                                        <Typography variant="overline" >ahdsajhckha wbda. wbda. sadhgksahdgk shdgas d sdhg sgdg g vbxcvgeqkwd bsvds kwedv bsad  dkqdb sa
                        sdsadbdbns wqewqjehw he sbdsb, wbda</Typography><br/>
                                        <a href="#"><Typography variant="overline" >Learn More ...</Typography></a>
                                    </Grid>
                                    
                                </Grid>
                            })
                        }

                    </Grid>
                    </Paper>
                </MarginGridItem>
            </Grid>
        </React.Fragment>
    )
}