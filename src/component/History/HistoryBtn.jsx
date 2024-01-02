import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ButtonComp from "../MiniComp/ButtonComp";

function HistoryBtn({
    label,
    width,
    boxWidth
}){

return(
    <>
        {/* <Box sx={{width:{boxWidth}}}> */}
            <ButtonComp label={label} color={"black"} fontSize={"0.7rem"} width={width}/>
        {/* </Box> */}
    </>
)
}

export default HistoryBtn;