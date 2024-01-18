import { Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

function ButtonComp({
    label,
    width,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    onClick,
    height = "100%",
    padding,
    minWidth,
    margin,
    mdFontSize,
    lgFontSize,
    smFontSize,
    backgroundColor,
    startIcon,
    endIcon,
    hover
}){

return(
    <>
        {/* <Button  sx={{width:{width}, borderRadius:{borderRadius}, fontSize:{fontSize}, }} variant="contained">{label}</Button> */}
        <Button 
            startIcon={startIcon}
            endIcon={endIcon} 
            sx={{width:{width}, 
            minWidth:{minWidth},
            borderRadius:{borderRadius},
            fontSize:{md:mdFontSize, lg:lgFontSize, sm:smFontSize},
            height:{height},
            fontWeight:{fontWeight},
            bgcolor:{backgroundColor},
            color:{color},
            padding:{padding},
            margin:{margin},
            "&:hover":{backgroundColor:hover},
            // "&:active":{color:"white"},
        
        }}  variant="contained" onClick={onClick} >{label}</Button>
    </>
)
}

export default ButtonComp;