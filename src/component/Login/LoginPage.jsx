import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import eyeDesk from "../../images/eyeDesk.png"

function LoginPage(){

return(
    <Box sx={{width:"100%",height:"100vh",display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <Box sx={{width:"50%",bgcolor:"#F5F5F5",paddingX:"1.5rem",borderRadius:"1rem"}}>
        <Stack flexDirection={"row"} justifyContent={"end"} sx={{width:"100%",marginTop:"1rem"}} >
            <Typography color={"#1757C2"} sx={{fontSize:"0.9rem",letterSpacing:"-0.02rem",fontWeight:"500"}}>Need help?</Typography>
        </Stack>
        <Stack justifyContent={"center"} flexDirection={"row"} sx={{marginTop:"3rem"}}>
            <Box>
                <img src={eyeDesk} />
            </Box>
        </Stack>
        <Stack justifyContent={"center"} flexDirection={"row"} sx={{marginTop:"2rem"}}>
            <Typography  sx={{fontWeight:800,color:"#1757C2",fontSize:"1.7rem"}}>Login</Typography>
        </Stack>
        <Stack justifyContent={"center"} flexDirection={"row"} sx={{marginTop:"2rem"}}>
            <Stack  sx={{width:"22.75rem"}}>
                <TextField required  sx={{marginBottom:"1.8rem"}} size="small" id="outlined-required" label="Email" />
                <TextField required  size="small" id="outlined-required" label="Password" />
                <Stack flexDirection={"row"} justifyContent={"end"} marginTop={"0.3rem"}>
                    <Typography sx={{color:"#1757C2",fontSize:"0.8rem"}}>Forgot Password?</Typography>
                </Stack>
            </Stack>
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"center"} marginTop={"5.5rem"}>
        <Button  sx={{width:"19.35rem", bgcolor:"#1757C2",paddingY:"0.6rem"}}><Typography color={"white"} fontSize={"1rem"} fontWeight={"600"}>Submit</Typography></Button>
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"center"}>
            <Typography sx={{color:"#636363",fontSize:"0.9rem"}}> 
            Dont have an account?
            </Typography>
            <Typography color={"#1757C2"} fontSize={"0.9rem"}>
             Signup
            </Typography>
        </Stack>
        </Box>
    </Box>
)
}

export default LoginPage;