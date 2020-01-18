import { THEME } from '../../const/theme.js';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
      backgroundColor: "red",
      zIndex: 10
  },
  indicator:{
      backgroundColor: THEME.dark_color,
      height: 48,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
  },
  tabIcons: {
    alignItems: "center",
    marginTop: 5,
    height: 40,
    color: "#fff",
    zIndex: 100,
    textAlign: "center"
  },
  tabs:{
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    top: 48,
    width: "100%"
  }
});