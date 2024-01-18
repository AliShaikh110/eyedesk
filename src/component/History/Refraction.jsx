import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeaderAuto from "../AutoRefractionInp/HeaderAuto";
import { UcvaFirst, UcvaSecond } from "../VisualAcuity/Ucva";
import { ContactLens, FirstUcva, Glasses, LabelComment, LabelSelect, Pinhole, SecondUcva } from "../VisualAcuity/SecondaryUcva";
import { LabelSelectUcva } from "./LabelSelectUcva";
import ArrowBtn from "./ArrowBtn";
import ForwardIcon from '@mui/icons-material/Forward';
import AutoRefractionInp from "../AutoRefractionInp/AutoRefractionInp";


export function Refraction() {

    return (
        <>
            <Box>
                <Grid container columnSpacing={"0.1rem"}>
                    <Grid item md={6}>
                        <HeaderAuto headLabel={"R/OD"} />
                    </Grid>
                    <Grid item md={6}>
                        <HeaderAuto headLabel={"L/OS"} />
                    </Grid>
                </Grid>


                <Grid container rowSpacing={"2rem"} columnSpacing={"0.5rem"}>
                    <Grid item md={6} marginBottom={"-1rem"}>
                        <ArrowBtn label={"VISUAL ACUITY (V3)"} endIcon={<ForwardIcon fontSize="large" />} />
                    </Grid>
                    <Grid item md={6} marginBottom={"-1rem"}>
                        <ArrowBtn label={"VISUAL ACUITY (V3)"} startIcon={<ForwardIcon fontSize="large" />} />
                    </Grid>
                    <Grid item md={6}>
                        <FirstUcva />
                    </Grid>
                    <Grid item md={6}>
                        <FirstUcva />
                    </Grid>
                    <Grid item md={6}>
                        <SecondUcva />
                    </Grid>
                    <Grid item md={6}>
                        <SecondUcva />
                    </Grid>
                    <Grid item md={6}>
                        <LabelSelectUcva />
                    </Grid>
                    <Grid item md={6}>
                        <LabelSelectUcva />
                    </Grid>
                    <Grid item md={6}>
                        <Pinhole />
                    </Grid>
                    <Grid item md={6}>
                        <Pinhole />
                    </Grid>
                    <Grid item md={6}>
                        <Glasses />
                    </Grid>
                    <Grid item md={6}>
                        <Glasses />
                    </Grid>
                    <Grid item md={6}>
                        <SecondUcva />
                    </Grid>
                    <Grid item md={6}>
                        <SecondUcva />
                    </Grid>
                    <Grid item md={6}>
                        <ContactLens />
                    </Grid>
                    <Grid item md={6}>
                        <ContactLens />
                    </Grid>
                    <Grid item md={6}>
                        <LabelComment />
                    </Grid>
                    <Grid item md={6}>
                        <LabelComment />
                    </Grid>

                </Grid>


                {/* *******AUTO REFRACTION (ARx)******* */}

                <Grid container rowSpacing={"2rem"} columnSpacing={"0.5rem"}>
                    <Grid item md={6}>
                        <ArrowBtn label={"AUTO REFRACTION (ARx)"} endIcon={<ForwardIcon />} />
                    </Grid>
                    <Grid item md={6}>
                        <ArrowBtn label={"AUTO REFRACTION (ARx)"} startIcon={<ForwardIcon />} />
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={1.5}><Typography fontSize={"0.95rem"}>Contact Lens</Typography></Grid>
                            <Grid item md={10.5}>
                                <AutoRefractionInp inpLabel={"Dry"} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={1.5}></Grid>
                            <Grid item md={10.5}>
                                <AutoRefractionInp inpLabel={"Dry"} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={1.5}></Grid>
                            <Grid item md={10.5}>
                                <AutoRefractionInp inpLabel={"Dilated"} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={1.5}></Grid>
                            <Grid item md={10.5}>
                                <AutoRefractionInp inpLabel={"Dilated"} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}