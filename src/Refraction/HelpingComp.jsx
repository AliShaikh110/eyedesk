import React from "react";
import ButtonComp from "../component/MiniComp/ButtonComp";
import { Grid, Icon, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import SelectAutoWidth from "../component/MiniComp/SelectInp";

export function ArrowBtn({label, startIcon, endIcon}){

return(
    <>
        <ButtonComp label={label} startIcon={startIcon} endIcon={endIcon}  padding={"1.5px 15px"} borderRadius={"0.75rem"} />
    </>
)
}

// ****


export function TextFieldRefraction({
    label,
    width = "100%",
    backgroundColor,
    disabled=false,
    fontSize,
    size="small",
    mdFontSize,
    lgFontSize
}){

return(
    <>
        <TextField fullWidth 
        InputLabelProps={{sx:{fontSize:{md : mdFontSize, lg: lgFontSize}  }}}
         id="outlined-basic" size={size} label={label} variant="outlined" disabled={disabled}
            sx={{width:{width},
            fontSize:{fontSize},
            color:"rgba(105, 105, 105, 0.55)",backgroundColor:{backgroundColor}}}
        />
    </>
)
}


export function LabelSelectRefraction({
    label,
    mdTypo=2,
    mdSelect=10,
    justifyContent="center",
    selectInpLabel,
    smTypo,
    smSelect,
    labelSpace

}){

return(
    <Grid container columnSpacing={0.5}>
        <Grid item sm={smTypo} md={mdTypo} sx={{display:"flex", flexDirection:"row", justifyContent:{justifyContent}, alignItems:"center"}}>
            <Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.85rem"}}}>{label}</Typography>
        </Grid>
        <Grid item sm={smSelect} md={mdSelect}>
            <SelectAutoWidth  bgcolor={"white"} width={"100%"} selectInpLabel={selectInpLabel} labelSpace={labelSpace} />
        </Grid>
    </Grid>
)
}