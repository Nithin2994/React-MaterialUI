import React from 'react'

import { Grid, List, ListItem, Paper, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'

const useStyles = makeStyles(theme => ({

}))

const MarginGridItem = styled(Grid)({
    margin: "5%",
    maxWidth: "350em"
})


export default function Database(props) {
    const classes = useStyles()
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfQxcbWpv3U-n1CLxgPswDAeQqsyqyvwQNg&usqp=CAU"
    const DUMMY = (width => <img src={img} width={width} />)

    return (
        <Grid item direction="column" alignItems="center" spacing={4}>
            <MarginGridItem item container direction="row" spacing={2} justifyContent="center" alignItems="center">
                <Grid item>
                    <Typography variant="h3">Cloud Database</Typography>
                </Grid>
                <Grid item>
                    {DUMMY("350em")}
                </Grid>
            </MarginGridItem>
            <MarginGridItem item component={Paper} elevation={0}>
                <Typography variant="h3">
                    About
                    </Typography>
                <Typography>
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                    navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                    navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                    navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                    navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                    navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                </Typography>
            </MarginGridItem>
            <MarginGridItem item container component={Paper} elevation={0}>
                <Typography variant="h3">
                    Advantages
                </Typography>
                <Grid item container alignItems="center" justifyContent="center">
                <Grid item lg={2} md={3} sm={6} xs={12}>
                        {DUMMY("200em")}
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12}>
                        {DUMMY("200em")}
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12}>
                        {DUMMY("200em")}
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12}>
                        {DUMMY("200em")}
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12}>
                        {DUMMY("200em")}
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12}>
                        {DUMMY("200em")}
                    </Grid>
                </Grid>
            </MarginGridItem>
            <MarginGridItem item component={Paper} elevation={0} container spacing={2} alignItems="center" direction="column">
                <Grid item xs={12} ><Typography variant="h3" align="center">Getting Started</Typography><br /></Grid>
                <Grid item xs={12} container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid xs={12} md={3} sm={6} item container direction="column" spacing={2} alignItems="center" justifyContent="flex-start">
                        <Grid item>
                            <Typography variant="h2">Step 1</Typography>
                        </Grid>
                        <Grid item>
                            <List>
                                <ListItem>
                                    <Typography variant="h6">1.1 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">1.2 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">1.3 : qwerqwerqwerq</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={3} sm={6} item container direction="column" spacing={2} alignItems="center">
                        <Grid item>
                            <Typography variant="h2">Step 2</Typography>
                        </Grid>
                        <Grid item>
                            <List>
                                <ListItem>
                                    <Typography variant="h6">2.1 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">2.2 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">2.3 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">2.4 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">2.5 : qwerqwerqwerq</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={3} sm={6} item container direction="column" spacing={2} alignItems="center">
                        <Grid item>
                            <Typography variant="h2">Step 3</Typography>
                        </Grid>
                        <Grid item>
                            <List>
                                <ListItem>
                                    <Typography variant="h6">3.1 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">3.2 : qwerqwerqwerq</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">3.3 : qwerqwerqwerq</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </MarginGridItem>
        </Grid>)
}