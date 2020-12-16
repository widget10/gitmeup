
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Button} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  DeviceHub,BugReport } from '@material-ui/icons'
import Error from '../Utils/Error'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(6, 0, 1),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.grey[700],
        color: 'white'
    },
}));


export default function RepoPage() {
    const classes = useStyles();
    const { repoid } = useParams()
    const repos = useSelector((state) => (state.repos.repos))
    const currRepo = repos.find(x => x.id === Number(window.atob(repoid)))

    if (!currRepo) return <Error message={"Unable to fetchh repo"} goback={false}/>

    return (
        <React.Fragment>
            <AppBar position="static" color="transparent" elevation={3} >
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" className={classes.toolbarTitle}>
                        {currRepo.name}
                    </Typography>
                    <Link to={'/'} style={{textDecoration:'none'}}>
                <Button color="primary">
                        Go Back
                        </Button>
                </Link>
                </Toolbar>
            </AppBar>

            <Container maxWidth="sm" className={classes.heroContent} >
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    REPOSITORY STATS
            </Typography>
            </Container>

            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader
                                title={'Stars'}
                                action={<StarIcon />}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <div >
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        {currRepo.stargazers_count}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    <Card>
                            <CardHeader
                                title={'Forks'}
                                action={  <DeviceHub /> }
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <div >
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        {currRepo.forks_count}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    <Card>
                            <CardHeader
                                title={'Issues'}
                                action={  <BugReport /> }
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <div >
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        {currRepo.open_issues_count}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
