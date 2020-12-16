import React from 'react';
import { makeStyles } from '@material-ui/styles'
import {  useSelector } from 'react-redux'
import { selectRepos } from '../../reducers/repoReducers'
import {
  ListItem,
  ListItemText,
  Grid
} from '@material-ui/core'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  card: {
    minHeight: '100px',
    padding: '16px',
    margin: '8px',
  },
}));

const RepoList = (props) => {

  const repos = useSelector(selectRepos)
  let history = useHistory();

  const handleClick = (repo) => {
    history.push(`repodash/${window.btoa(repo.id)}`)
  }

  const classes = useStyles()

  if (!repos.length){
    return <Grid item xs={12} sm={6}>
    <ListItem
      onClick={(e) => {
        e.preventDefault()
        handleClick('main')
      }}
      button
      style={{
        border: `1.2px solid `,
        borderRadius: '10px'
      }}
      className={classes.card}
      // key={`repo-${repo.name}`}
    >
      <ListItemText
        primary={"Try repo"}
        secondary={"repo.description"}
      />
    </ListItem>
  </Grid>
  }
  
  return  <>
    {repos.map((repo) => (
      <Grid item xs={12} sm={6}>
        <ListItem
          button
          onClick={(e) => {
            e.preventDefault()
            handleClick(repo)
          }}
          style={{
            border: `1.2px solid `,
            borderRadius: '10px'
          }}
          className={classes.card}
          key={`repo-${repo.name}`}
        >
          <ListItemText
            primary={repo.name}
            secondary={repo.description}
          />
        </ListItem>
      </Grid>
    ))}
  </>
}

export default RepoList