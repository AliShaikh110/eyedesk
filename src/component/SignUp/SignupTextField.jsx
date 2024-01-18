import { TextField } from "@mui/material";
import React from "react";

function SignupTextField({
    label
}) {

    return (
        <>
            <TextField
                InputLabelProps={{
                    style: { fontSize: "15px" ,margin:"0px 4px"}
                }}
                inputProps={{
                    style: { height: "18px",
                    }
                }} le required size="small" id="outlined-required" label={label} />
        </>
    )
}

export default SignupTextField;