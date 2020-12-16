import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@material-ui/core'
import { SearchOutlined, GitHub } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../reducers/userReducers'
import { fetchRepos } from '../../reducers/repoReducers';

const useStyles = makeStyles(({ spacing }) => ({
  searchInput: {
    borderRadius: spacing(3),
    height: spacing(5),
    alignSelf: 'center',
    marginTop: spacing(2),
    marginBottom: spacing(4),
  },
  header: {
    padding: '32px 48px 16px 48px',
  },
}))

export default function SearchInput(props) {

  const classes = useStyles();
  const [username, setUsername] = React.useState('');
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)

  const onSubmit = (e) => {
    dispatch(fetchUser(username))
  }

  React.useEffect(() => {
    console.log(user)
    if (user.login) {
      dispatch(fetchRepos(user.login))
    }
  }, [user,dispatch])

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <Grid container justify={'center'}>
      <Typography className={classes.header} variant={'h4'}>GIT ME UP!</Typography>
      <Grid className={classes.searchInput}
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            if (username !== '') {
              onSubmit(username);
            }
          }}
        >
          <OutlinedInput
            fullWidth
            autoFocus
            value={username}
            className={classes.searchInput}
            id="standard-name"
            placeholder={'Type a username'}
            startAdornment={
              <InputAdornment position="start">
                <GitHub />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start" type="submit" value="Search">
                <IconButton edge={'end'} type="submit" onSubmit={onSubmit}>
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            }
            onChange={handleChange}
          />
        </form>
      </Grid>
    </Grid>
  );
}



