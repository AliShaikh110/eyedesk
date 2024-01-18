// *******Layout of Ucva, Pinhole, Glasses & Contact Lens.*******
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ButtonComp from "../MiniComp/ButtonComp";
import { UcvaFirst, UcvaSecond } from "./Ucva";
import TextFieldInp from "../MiniComp/TextFieldInp";
import SelectAutoWidth from "../MiniComp/SelectInp";

export function FirstUcva() {

    return (
        <>
            <Grid container rowSpacing={"2rem"}>
                <Grid item md={1.5}><Typography fontSize={"0.95rem"}>UCVA</Typography></Grid>
                <Grid item md={9}>

                    <UcvaFirst />
                </Grid>
                <Grid item md={1.5}>
                    <Stack flexDirection={"row"} justifyContent={"end"}>
                        <ButtonComp mdFontSize={"0.75rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}


export function SecondUcva() {

    return (
        <Grid container>
            <Grid item md={1.5}></Grid>
            <Grid item md={9}>
                <UcvaSecond />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp mdFontSize={"0.75rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}



export function Pinhole() {

    return (
        <Grid container>
            <Grid item md={1.5}><Typography fontSize={"0.95rem"}>Pinhole</Typography></Grid>
            <Grid item md={9}>

                <UcvaFirst />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"column"} spacing={0.1} alignItems={"end"}>
                    <ButtonComp backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                    <ButtonComp backgroundColor={"white"} minWidth={"9px"} padding={"6px 13.5px"} label={"NI"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}



export function Glasses() {

    return (
        <Grid container>
            <Grid item md={1.5}><Typography fontSize={"0.95rem"}>Glasses</Typography></Grid>
            <Grid item md={9}>

                <UcvaFirst />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                <ButtonComp backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"}/>
                </Stack>
            </Grid>
        </Grid>

    )
}


export function ContactLens() {

    return (
        <Grid container>
            <Grid item md={1.5}><Typography fontSize={"0.95rem"}>Contact Lens</Typography></Grid>
            <Grid item md={9}>

                <UcvaFirst />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                <ButtonComp backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"}/>
                </Stack>
            </Grid>
        </Grid>

    )
}

export function LabelComment({
    label="Comment"
}){

return(
    <Grid container>
        <Grid item md={1.5}>
            <Typography sx={{fontSize:{md:"0.78rem", lg:"0.9rem"}}}>
                {label}
            </Typography>
        </Grid>
        <Grid item md={10.5}>
            <TextFieldInp width={"100%"} backgroundColor={"white"}/>
        </Grid>
    </Grid>
)
}

export function LabelSelect({
    label,
    mdTypo=2,
    mdSelect=10,
    justifyContent="center",
    selectInpLabel

}){

return(
    <Grid container columnSpacing={0.5}>
        <Grid item md={mdTypo} sx={{display:"flex", flexDirection:"row", justifyContent:{justifyContent}, alignItems:"center"}}>
            <Typography fontSize={"0.9rem"}>{label}</Typography>
        </Grid>
        <Grid item md={mdSelect}>
            <SelectAutoWidth  bgcolor={"white"} selectInpLabel={selectInpLabel} />
        </Grid>
    </Grid>
)
}