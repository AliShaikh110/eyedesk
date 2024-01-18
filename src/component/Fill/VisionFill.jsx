import { Grid } from "@mui/material";
import React from "react";
// import AutoRefractionInp from "../AutoRefractionInp/AutoRefractionInp";
import Vision from "../AutoRefractionInp/Vision";

function VisionFill(){

return(
    <>
        <Grid container columnSpacing={"0.15rem"} rowSpacing={"2rem"} marginTop={"0.5rem"}>
            <Grid item md={6} >
                <Vision firstInpLabel={"Distant"} secondInpLabel={"Add"} thirdInpLabel={"Near"}/>
            </Grid>
            <Grid item md={6} >
                <Vision firstInpLabel={"Distant"} secondInpLabel={"Add"} thirdInpLabel={"Near"}/>
            </Grid>
            <Grid item md={6} >
                <Vision firstInpLabel={"Distant"} secondInpLabel={"Add"} thirdInpLabel={"Near"}/>
            </Grid>
            <Grid item md={6} >
                <Vision firstInpLabel={"Distant"} secondInpLabel={"Add"} thirdInpLabel={"Near"}/>
            </Grid>
            
            
            
        </Grid>
    </>
)
}

export default VisionFill;