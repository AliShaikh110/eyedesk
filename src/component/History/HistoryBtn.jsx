import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ButtonComp from "../MiniComp/ButtonComp";

function HistoryBtn({
    label,
    padding,
    backgroundColor
}){

return(
    <>
            <ButtonComp backgroundColor={"white"}  label={label} width={"100%"}   color={"black"} smFontSize={"0.68rem"} mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} padding={padding}/>
    </>
)
}

export default HistoryBtn;