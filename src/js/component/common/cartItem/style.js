import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({ 
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    plusStyle:{
        backgroundColor: "yellow",
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        width: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    minesStyle:{
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        width: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#fff",
        color: "#fff"
    },
    imageStyle:{
        width: 10,
        height: 55
    },
    summeryStyle: {
        width: 60,
        display: "flex",
        justifyContent: "center",
        padding: 2,
        backgroundColor: "#fff",
        borderRadius: 6,
        marginLeft: 15,
        position: "relative"
    },
    addMinStyle: {
        display: "flex",
        justifyContent: "space-between",
        width: 100
    },
    textStyle: {
        color: "#fff",
        fontSize: 14,
        marginLeft: 10
    },
    summeryContainer: {
        height: 70,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 5,
        justifyContent: "space-between",
    },
    abvStyle:{
        padding: 3,
        backgroundColor: "yellow",
        borderRadius: 6,
        position: "absolute",
        top: -10,
        right: -15
    },
    deleteBtn:{ 
        color: "pink", 
        marginLeft: 30, 
        marginRight: 30 
    }
});