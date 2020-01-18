import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: window.innerHeight - 180,
    }
  }));

  export const styles = {
    innerTab:{
      display: "flex",
      flexDirection: "row"
    },
    textStyle: { 
        color: "#fff" 
    },
    tooltip: {
        width: 48,
        height: 48
    },
    fabStyle: {
        position: "absolute",
        bottom: 80,
        right: 20
    }
  }