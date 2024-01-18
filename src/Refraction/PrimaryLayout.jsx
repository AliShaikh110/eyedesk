// *******Layout of Ucva, Pinhole, Glasses & Contact Lens.*******
import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import SelectAutoWidth from "../component/MiniComp/SelectInp";
import { ContrastSensiMaping, UcvaFirstMaping, UcvaSecondMaping } from "./RefractionPrimary";
import ButtonComp from "../component/MiniComp/ButtonComp";
import { LabelSelectRefraction, TextFieldRefraction } from "./HelpingComp";

export function FirstUcvaLayout() {

    return (
        <>
            <Grid container rowSpacing={"2rem"}>
                <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.9rem"}}} >UCVA</Typography></Grid>
                <Grid item sm={9} md={9}>

                    <UcvaFirstMaping />
                </Grid>
                <Grid item sm={1.5} md={1.5}>
                    <Stack flexDirection={"row"} justifyContent={"end"}>
                        <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export function SecondUcvaLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}></Grid>
            <Grid item sm={9} md={9}>
                <UcvaSecondMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}

// ****** Just inject after ucva **********

export function SelectLabelAfterUcva() {

    return (
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Grid item sm={1.5} md={1.5}>

            </Grid>
            <Grid item sm={9} md={9}>
                <Grid container columnSpacing={1.5}>
                    <Grid item sm={1} md={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Typography sx={{fontSize:{md:"0.78rem", lg:"0.85rem"}}} >PR:</Typography>
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"S"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"I"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"N"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"T"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item sm={1.5} md={1.5}>
            </Grid>
        </Grid>
    )
}

export function PinholeLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem",md:"0.78rem", lg:"0.9rem"}}}>Pinhole</Typography></Grid>
            <Grid item sm={9} md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"column"} spacing={0.1} alignItems={"end"}>
                    <ButtonComp smFontSize={"0.75rem"}  mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"0px"} label={"P"} color={"black"} />
                    <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"9px"} padding={"6px 13.5px"} label={"NI"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}

export function GlassesLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.9rem"}}}>Glasses</Typography></Grid>
            <Grid item sm={9} md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}

export function ContactLensLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem",md:"0.78rem", lg:"0.9rem"}}}>Contact Lens</Typography></Grid>
            <Grid item sm={9} md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}

export function LabelCommentLayout({size,
    label="Comment",
    mdLabel=1.5,
    mdTextField=10.5,
    smLabel=1.5,
    smTextField=10.5,
    justifyContent
    
}) {

    return (
        <Grid container>
            <Grid item sm={smLabel}  md={mdLabel}  display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={justifyContent}>
                <Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.9rem"}}}>
                    {label}
                </Typography>
            </Grid>
            <Grid item sm={smTextField} md={mdTextField}>
                <TextFieldRefraction size={size} width={"100%"} backgroundColor={"white"} />
            </Grid>
        </Grid>
    )
}

export function LabelAndSelectLayout({ label }) {

    return (
        <Grid container columnSpacing={0.5}>
            <Grid item sm={2} md={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Typography sx={{fontSize:{sm:"0.8rem",md:"0.78rem", lg:"0.9rem"}}}>{label}</Typography>
            </Grid>
            <Grid item sm={10} md={10}>
                <SelectAutoWidth mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} bgcolor={"white"} />
            </Grid>
        </Grid>
    )
}

export function ContrastSensiLayout() {

    return (
        <Grid container columnSpacing={0.5}>
            <Grid item sm={1.5} md={1.5} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            </Grid>
            <Grid item sm={9.5} md={9.5}>
                <ContrastSensiMaping />
            </Grid>
            <Grid item sm={1} md={1}>
            </Grid>
        </Grid>
    )
}



