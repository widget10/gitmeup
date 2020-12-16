import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import { selectUser } from '../../reducers/userReducers'
import { Grid, Divider, Typography } from '@material-ui/core'
import UserCard from './Card'
import RepoList from '../Users/RepoList'
import InsightsCard from './InsightsCards';
import Loader from '../Utils/Loader'
import Error from '../Utils/Error'
import Landing from '../Landing'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  paper: {
    padding: '16px',
    margin: '32px',
    textAlign: 'center',
  },
  card: {
    padding: '16px',
    margin: '16px',
    textAlign: 'center',

  },
}));

const UserPage = () => {


  const userStatus = useSelector((state) => state.users.status)
  const error = useSelector((state) => state.users.error)
  const user = useSelector(selectUser)
  const repos = useSelector((state) => state.repos.repos)
  const classes = useStyles()

  if (userStatus === 'pending') return <Loader loading={true} />

  if (error) return <Error message={'USER NOT FOUND'} submessage={'Please search again'} goback={false} />

  return user && user.login ?
    <Grid container spacing={3} className={classes.root} >
      <Grid item xs={12} sm={3} className={classes.card}   >
        <UserCard user={user} />
      </Grid>
      <Grid item xs={12} sm={8} className={classes.card}   >
        <InsightsCard user={user} repos_count={repos.length} />
      </Grid>
      <Grid item xs={12} sm={12}  >
          <Typography  > Click on any repository to see more insights</Typography>
          <Divider />
      </Grid>
       <RepoList />
    </Grid>
    :
    <Landing />
}

export default UserPage