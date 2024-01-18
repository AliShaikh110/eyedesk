import { Grid, Typography } from "@mui/material";
import React from "react";
import { LabelSelect } from "../VisualAcuity/SecondaryUcva";

export function LabelSelectUcva() {

    return (
        <Grid container sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
            <Grid item md={1.5}>

            </Grid>
            <Grid item md={9}>
                <Grid container columnSpacing={1.5}>
                <Grid item md={1}  sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
                    <Typography fontSize={"0.95rem"}>PR:</Typography>
                </Grid>
                <Grid item md={2.75}>
                    <LabelSelect label={"S"} />
                </Grid>
                <Grid item md={2.75}>
                    <LabelSelect label={"I"} />
                </Grid>
                <Grid item md={2.75}>
                    <LabelSelect label={"N"} />
                </Grid>
                <Grid item md={2.75}>
                    <LabelSelect label={"T"} />
                </Grid>
                </Grid>
            </Grid>
            <Grid item md={1.5}>

            </Grid>




        </Grid>
    )
}