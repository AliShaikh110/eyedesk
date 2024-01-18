import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TextFieldInp from "../MiniComp/TextFieldInp";

function AutoRefractionInp({
    inpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item md={3}></Grid>
                        <Grid item md={3}><Typography variant="subtitle1" fontWeight={600} color={"white"}>Sph</Typography> </Grid>
                        <Grid item md={3}><Typography variant="subtitle1" fontWeight={600} color={"white"}>Cyl</Typography> </Grid>
                        <Grid item md={3}><Typography variant="subtitle1" fontWeight={600} color={"white"}>Axis</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item md={3}><TextFieldInp  backgroundColor={"transparent"} label={inpLabel} disabled={true}/></Grid>
                <Grid item md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={3}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item md={3}><TextFieldInp   backgroundColor={"white"}/></Grid>

                <Grid item md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
                <Grid item md={3}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>

                <Grid item md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
                <Grid item md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
            </Grid>
        </>
    )
}

export default AutoRefractionInp;