import { Box, Grid } from "@mui/material";
import React from "react";
import { ContactLens, FirstUcva, Glasses, Pinhole, SecondUcva } from "./SecondaryUcva";
import HeaderAuto from "../AutoRefractionInp/HeaderAuto";

export function UcvaMain() {

    return (
        <>
            <Grid container columnSpacing={"0.7rem"} bgcolor={"#f3f1f1"} paddingX={"0.7rem"} boxSizing={"border-box"} >
                <Grid item md={6}><HeaderAuto headLabel={"R/OD"} /></Grid>
                <Grid item md={6}><HeaderAuto headLabel={"L/OS"} /></Grid>
                <Grid item md={6} paddingRight={"0.7rem"}>
                    <Grid container rowSpacing={"2rem"}>
                        <Grid item md={12}>
                            <FirstUcva />
                        </Grid>
                        <Grid item md={12}>
                            <SecondUcva />
                        </Grid>
                        <Grid item md={12}>
                            <Pinhole />
                        </Grid>
                        <Grid item md={12}>
                            <Glasses />
                        </Grid>
                        <Grid item md={12}>
                            <SecondUcva />
                        </Grid>
                        <Grid item md={12}>
                            <ContactLens />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} >
                    <Grid container rowSpacing={"2rem"} >
                        <Grid item md={12}>
                            <FirstUcva />
                        </Grid>
                        <Grid item md={12}>
                            <SecondUcva />
                        </Grid>
                        <Grid item md={12}>
                            <Pinhole />
                        </Grid>
                        <Grid item md={12}>
                            <Glasses />
                        </Grid>
                        <Grid item md={12}>
                            <SecondUcva />
                        </Grid>
                        <Grid item md={12}>
                            <ContactLens />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}