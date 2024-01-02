import { Stack, Typography } from "@mui/material";
import React from "react";
import error from "../../images/error.png"

function ErrorComp({
    label
}){

return(
    <>
        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingRight={"0.7rem"}>
            
            <img src={error} />
            <Typography  sx={{color:"rgba(164, 164, 164, 1)", fontSize:"0.9rem", paddingX:"0.1rem"}}>{label}</Typography>
        </Stack>
    </>
)
}

export default ErrorComp;