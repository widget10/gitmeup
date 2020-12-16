import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { LinearProgress } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    progress: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex:2  
        }
}))

 const Loader = (loading) => {
    const classes = useStyles()
    return <LinearProgress  className={classes.progress} />
}

export default Loader