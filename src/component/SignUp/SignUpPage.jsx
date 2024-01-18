import React from "react";
import SignUpLeftPage from "./SignUpLeftPage";
import { Grid } from "@mui/material";
import SignUpRightPage from "./SignUpRightPage";
import { AutoRefractionAr } from "../../Refraction/SecondaryLayout";

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
            <Grid container>
            <Grid item md={6}>
                    <AutoRefractionAr />
                </Grid>
                <Grid item md={6}>
                    <AutoRefractionAr />
                </Grid>
            </Grid>
        </>
    )
}

export default SignUpPage;