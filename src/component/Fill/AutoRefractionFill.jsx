import { Grid } from "@mui/material";
import React from "react";
import AutoRefractionInp from "../AutoRefractionInp/AutoRefractionInp";
import HeaderAuto from "../AutoRefractionInp/HeaderAuto";

function AutoRefractionFill(){

return(
    <>
        <Grid container columnSpacing={"0.15rem"} rowSpacing={"2rem"}>
            <Grid item md={6} >
            <HeaderAuto headLabel={"R/OD"}/>
                <AutoRefractionInp inpLabel={"Dry"}/>
            </Grid>
            <Grid item md={6}>
                <HeaderAuto headLabel={"L/OS"}/>
                <AutoRefractionInp inpLabel={"Dry"}/>
            </Grid>
            <Grid item md={6}>
                <AutoRefractionInp inpLabel={"Dilated"}/>
            </Grid>
            <Grid item md={6}>
                <AutoRefractionInp inpLabel={"Dilated"}/>
            </Grid>
        </Grid>
    </>
)
}

export default AutoRefractionFill;