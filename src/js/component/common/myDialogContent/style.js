import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      backgroundColor: "#222",
      paddingRight: 20
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      height: 75,
      width: 20,
      borderRadius: 10,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    mediaMainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    mediaContainer: {
      padding: 5,
      height: 95,
      width: 95,
      borderRadius: 10,
      backgroundColor: "#fff",
      display: "flex",
      justifyContent:"center",
      alignItems:"center"
    },
    AddButton:{
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      marginTop: 15,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize:12
    },
    nameStyle:{ 
        color: "#fff" 
    },
    subtitleStyle: { 
        color: "#fff",
        fontSize: 12 
    }
  }));