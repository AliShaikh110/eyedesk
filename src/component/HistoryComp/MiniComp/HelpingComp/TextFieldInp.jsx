import { TextField } from "@mui/material";
import React from "react";

function TextFieldInp({
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
        InputLabelProps={{sx:{fontSize:{sm :"0.9rem", lg: "0.85rem"}, marginTop:"0.25rem"  }}}
         id="outlined-basic" size={size} label={label} variant="outlined" disabled={disabled}
            sx={{width:{width},
            fontSize:{fontSize},
            color:"rgba(105, 105, 105, 0.55)",backgroundColor:{backgroundColor}}}
        />
    </>
)
}

export default TextFieldInp;