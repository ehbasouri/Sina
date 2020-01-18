import React from 'react';
import { useStyles } from './style';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}