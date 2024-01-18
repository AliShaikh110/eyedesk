import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TextFieldInp from "../MiniComp/TextFieldInp";

function Vision({
    firstInpLabel,
    secondInpLabel,
    thirdInpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item md={2.4}></Grid>
                        <Grid item md={2.4}><Typography variant="subtitle1" fontWeight={600} color={"white"}>Sph</Typography> </Grid>
                        <Grid item md={2.4}><Typography variant="subtitle1" fontWeight={600} color={"white"}>Cyl</Typography> </Grid>
                        <Grid item md={2.4}><Typography variant="subtitle1" fontWeight={600} color={"white"}>Axis</Typography> </Grid>
                        <Grid item md={2.4}><Typography variant="subtitle1" fontWeight={600} color={"white"}>Vision</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item md={2.4}><TextFieldInp  backgroundColor={"transparent"} label={firstInpLabel} disabled={true}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item md={2.4}><TextFieldInp   backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp   backgroundColor={"white"}/></Grid>

                <Grid item md={2.4}><TextFieldInp  backgroundColor={"transparent"}  label={secondInpLabel}/></Grid>
                <Grid item md={2.4}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>

                <Grid item md={2.4}><TextFieldInp  backgroundColor={"transparent"} label={thirdInpLabel} /></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
            </Grid>
        </>
    )
}

export default Vision;