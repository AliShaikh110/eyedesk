import React from "react";
import SignUpLeftPage from "./SignUpLeftPage";
import { Grid } from "@mui/material";
import SignUpRightPage from "./SignUpRightPage";

function SignUpPage() {

    return (
        <>
            <Grid container>
                <Grid item sm={12} md={4.7}>

                    <SignUpLeftPage />
                </Grid>
                <Grid item sm={12} md={7.3}>
                    <SignUpRightPage />

                </Grid>
            </Grid>
        </>
    )
}

export default SignUpPage;