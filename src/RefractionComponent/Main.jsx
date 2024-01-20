import React from "react";
import { Grid } from "@mui/material";
import { VisualAcuityV3Merging } from "./VisualAcuity/Main";
import { AutoRefractionAr } from "./AutoRefaction/Main";
import { DryRefraction } from "./DryRefraction/Main";
import { RefractionDilated } from "./RefractionDilated/Main";
import { Pgp1 } from "./Pgp1/Main";
import { GlassesPrescriptions } from "./GlassesPrescription/Main";
import { IntermediateGlassesPrescriptions } from "./IntermediateGlasses/Main";
import { Pmt } from "./Pmt/Main";
import Retinoscopyy from "./RetinosCopy/Main";
import { Keratometry } from "./Keratometry/Main";
import { ContactLensPrescriptions } from "./ContactLensPrescription/Main";
import { ColorVision } from "./ColorVision/Main";
import { ContrastSensi } from "./ContrastSensi/Main";
import { Orthoptics } from "./Orthoptics.jsx/Main";

export function Refraction() {

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