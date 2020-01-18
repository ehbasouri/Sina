import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MyDialogContent from "../myDialogContent/MyDialogContent.jsx"
import { useStyles } from './style'

export default function MyNodal({
  open,
  handleClose,
  selectedBeer
}) {

  const classes= useStyles()

  return (
    <div>
      <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <div className={classes.container}>
          <MyDialogContent
            handleClose={handleClose}
            selectedBeer={selectedBeer}
          />
        </div>
      </Dialog>
    </div>
  );
}
