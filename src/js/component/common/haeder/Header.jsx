import React from 'react';
import {useStyles} from './style'
function Header() {

  const classes = useStyles();

    return(
        <div className={classes.header}>
            DemoApp
        </div>
    )
}

export default Header;

