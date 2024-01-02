import { Box } from "@mui/material";
import React from "react";
import ButtonComp from "../MiniComp/ButtonComp";

function NavigationBar({
    label
}) {

    return (
        <>
            <Box sx={{
                width: "11.5rem",
                  marginLeft: "-1.55rem",
                height: "3rem", // Adjust for desired proportions
                clipPath: 'polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',

            }}
            >
                <ButtonComp label={label} width={"100%"} />
            </Box>
        </>
    )
}

export default NavigationBar;