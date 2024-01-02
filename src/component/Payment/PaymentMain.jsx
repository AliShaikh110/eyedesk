import { Grid, Stack } from "@mui/material";
import React from "react";
import Payment from "./Payment";
import PaymentRightPage from "./PaymentRightPage";

function PaymentMain(){

return(
    <>
        <Stack height={"100vh"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>

        
        <Grid container height={"100%"}>
            <Grid item md={7} sm={12}  paddingBottom={"1.5rem"} paddingX={"3rem"} paddingTop={"3rem"}>
                <Payment />
            </Grid>
            <Grid item md={5} sm={12} sx={{bgcolor:"rgba(249, 249, 249, 1)", width:"100%", height:"100%", paddingTop:"5rem", paddingX:"3rem"}}>
                <PaymentRightPage />
            </Grid>
        </Grid>
        </Stack>
    </>
)
}

export default PaymentMain;