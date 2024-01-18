import { Grid } from "@mui/material";
import React from "react";
import { AutoRefractionAr, ColorVision, ContactLensPrescriptions, ContrastSensi, DryRefraction, GlassesPrescriptions, IntermediateGlassesPrescriptions, Keratometry, Orthoptics, Pgp1, Pmt, RefractionDilated, Retinoscopy, VisualAcuityV3Merging } from "./SecondaryLayout";
import Retinoscopyy from "../component/NewRatina/Retinoscopyy";

export function VisualAcuityV3() {

    return (
        <>
            <style>
            {`
            .myBtn .css-9tj150-MuiButton-endIcon {
            display: inherit;
            margin-right: -4px;
            margin-left: 1;}
            `}
            </style>
            <Grid container bgcolor={"#f3f1f1"} columnSpacing={2} sx={{ border: "2px solid rgba(105, 105, 105, 0.5)" }}>
                <Grid item md={12} sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)" }}>
                    <Grid container >
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}} >
                            <VisualAcuityV3Merging />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}} >
                            <VisualAcuityV3Merging />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)" }}>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <AutoRefractionAr />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <AutoRefractionAr />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)" }}>
                    <Grid container>
                        <Grid item sm={12} md={6}  sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <DryRefraction />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <DryRefraction />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6}  sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <RefractionDilated />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <RefractionDilated />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <Pgp1 />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <Pgp1 />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6}  sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <GlassesPrescriptions />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <GlassesPrescriptions />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6}  sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <IntermediateGlassesPrescriptions />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <IntermediateGlassesPrescriptions />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <Pmt />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <Pmt />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)", paddingX:"0.5rem"}}>
                            <Retinoscopyy />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{paddingX:"0.5rem"}}>
                            <Retinoscopyy />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)"}}>
                            <Keratometry />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Keratometry />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)"}}>
                            <ContactLensPrescriptions />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ContactLensPrescriptions />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)"}}>
                            <ColorVision />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ColorVision />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)"}}>
                            <ContrastSensi />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ContrastSensi />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{borderRight:"1px solid rgba(105, 105, 105, 0.5)"}}>
                            <Orthoptics />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Orthoptics />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}