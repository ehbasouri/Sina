import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
    card: {
      paddingTop: 10,
      margin: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"center",
    },
    media: {
      height: 65,
      width: 15,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    textStyle:{
        height: 20,
        overflow: "hidden",
    }
  }));