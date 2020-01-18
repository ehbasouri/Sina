import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));