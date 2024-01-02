import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import TextFieldInp from "../MiniComp/TextFieldInp";
import razor from "../../images/razor.png";
import upi from "../../images/upi.png"

function Payment(){

return(
    // <Box sx={{display:"flex",bgcolor:"gray", justifyContent:"center",alignItems:"center",flexDirection:"row",width:"100%"}}>
    <Box sx={{width:"100%",bgcolor:"white"}}>
        <Stack alignItems={"center"} sx={{marginBottom:"2rem"}}>
            <Typography variant="h5" sx={{color:"#373737"}}>Enter Your Payment Details</Typography>
        </Stack>
        <Grid container columnSpacing={"1rem"} rowSpacing={"1rem"}>
            <Grid item md={7} sm={12}>
                <TextFieldInp label={"Card Number"}/>
            </Grid>
            <Grid item md={2.5} sm={6}>
                <TextFieldInp label={"MM/YY"}/>
            </Grid>
            <Grid item md={2.5} sm={6}>
                <TextFieldInp label={"CVV"}/>
            </Grid>
            <Grid item md={12} sm={12}>
                <TextFieldInp label={"Street Address"}/>
            </Grid>
            <Grid item md={12} sm={12}>
                <TextFieldInp label={"Apt, unit, suite, etc. (optional)"}/>
            </Grid>
            <Grid item md={12} sm={6}>
                <TextFieldInp label={"Country"}/>
            </Grid>
            <Grid item md={5} sm={6}>
                <TextFieldInp label={"City"}/>
            </Grid>
            <Grid item md={3} sm={6}>
                <TextFieldInp label={"State"}/>
            </Grid>
            <Grid item md={4} sm={6}>
                <TextFieldInp label={"Zip Code"}/>
            </Grid>
        </Grid>

        {/* ***********OR*************** */}

        <Stack  alignItems={"center"} marginBottom={"1rem"} marginTop={"1rem"}>
            <Typography variant="h5" sx={{fontWeight:700}}>OR</Typography>
            <Typography variant="subtitle1" sx={{fontWeight:500}}>Pay With</Typography>
        </Stack>
        <Stack alignItems={"center"} spacing={"0.5rem"}>
            <Box sx={{width:"17rem"}}>
                <img width={"100%"} src={razor}/>
            </Box>
            <Box sx={{width:"5rem"}} >
                <img width={"100%"} src={upi}/>
            </Box>
        </Stack>
        

        </Box>
    // </Box>
)
}

export default Payment;