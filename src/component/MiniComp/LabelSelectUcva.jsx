import { Grid, Typography } from "@mui/material"
import React from "react"
import SelectAutoWidth from "./SelectInp"

export function LabelSelectUcva({label}){

    return(
        <Grid container columnSpacing={0.5}>
            <Grid item sm={2} md={2} sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <Typography sx={{fontSize:{md:"0.78rem", lg:"0.85rem"}}}>{label}</Typography>
            </Grid>
            <Grid item sm={10} md={10}>
                <SelectAutoWidth bgcolor={"white"} />
            </Grid>
        </Grid>
    )
    }