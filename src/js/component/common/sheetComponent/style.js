import { THEME } from "../../../const/theme";

export const styles={
    bodyStyle: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: THEME.dark_color
    },
    buttonStyle: {
        backgroundColor: THEME.dark_color,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        minHeight: 48
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    sheetButton: {
        width: 20,
        height: 4,
        borderRadius: 4,
        backgroundColor: "#fff",
        marginTop: 10,
        marginBottom: 5
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
        marginLeft: 15
    },
    addMinStyle: {
        display: "flex",
        justifyContent: "space-between",
        width: 100
    },
    textStyle: {
        color: "#fff",
        fontSize: 14
    },
    summeryContainer: {
        height: 70,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 5,
        justifyContent: "space-between",
    },
    confirmButton:{ 
        backgroundColor: "yellow", 
        borderRadius: 10, 
        color: "#000",
        fontWeight: "bold",
        width: 300,
        marginTop: 10,
        marginBottom: 10
    },
    swipeButton: {
        height: 48, 
        backgroundColor: THEME.dark_color, 
        position: "fixed", 
        width: "100%", 
        zIndex: 10, 
        top: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    },
    textContainer:{
        width: 300,
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10
    }
};