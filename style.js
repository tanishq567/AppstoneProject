import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    paper:{
        padding:'10px', display:"flex", flexDirection:"column",justifyContent:"center",width:'90px'
    },
    mapContainer:{
        height:'90vh', width:'100%'
    },
    makerContainer:{
        position:'absolute',transform:"translate(-50%,-50%)",zIndex:1,'&:hover':{zINdex:2},
    },
    pointer:{
        cursor:'pointer'
    }
}))