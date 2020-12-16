import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid,  Typography,Paper,Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
      textAlign: 'center',
      marginTop:'200px'  
    },
    errorcontent:{
        padding:'20px'
    }
  }));

 const Error = ({message,submessage,goback}) => {
    const classes = useStyles()
    const showGoback = goback;

    return (
        <Grid  className={classes.root}  >
            <Paper elevation={3} className={classes.errorcontent}   >
                <Typography variant={'h4'}>{message || "Error"} </Typography>
                <Typography variant={'h5'} color={'textSecondary'}>{submessage || ""}</Typography>
                <Link to={'/'} style={{textDecoration:'none'}}>
                        {showGoback && <Button color="primary">
                        Go Back
                        </Button>}
                </Link>
                    
               
            </Paper>
        </Grid>
    )
}

export default Error