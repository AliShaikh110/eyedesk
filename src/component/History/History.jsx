// ********History-Head error and nav btn are here and Hitory comp is called , After nav (sm-md) History comp is called.************

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SelectInp from "../MiniComp/SelectInp"
import ErrorComp from "./ErrorComp";
import tick from "../../images/tick.png"
import ButtonComp from "../MiniComp/ButtonComp";
import NavigationBar from "../Navigation/NavigationBar";
import HistoryComp from "./HistoryComp";
import { Refraction } from "./Refraction";

function History() {
    const myBtn = () => {

    }

    return (
        <>
            <Box sx={{ bgcolor: "white", paddingX: "0rem", }}>

                {/* *********Header********* */}

                <Grid container alignItems={"center"} sx={{ borderBottom: { sm: "0.15rem solid rgba(105, 105, 105, 0.5)" }, paddingTop: { md: "0.35rem" }, paddingBottom: { sm: "0.6rem", md: "0.7rem" }, paddingX: "0.6rem" }}>
                    <Grid item md={1.7} lg={2} sm={12}>
                        <Typography sx={{ fontSize: { sm: "1.2rem", md: "1.1rem", lg: "1.2rem" }, color: "rgba(164, 164, 164, 1)", paddingTop: { sm: "0.5rem", md: 0 } }}>Eye Template</Typography>
                    </Grid>
                    <Grid item md={2.1} lg={2} sm={2.8}>
                        <Typography sx={{ color: "rgba(164, 164, 164, 1)", fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>
                            Mr. Ray O’Son/24/Male
                        </Typography>
                    </Grid>
                    <Grid item md={2.8} lg={2.6} sm={3.2}>
                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Typography color={"rgba(55, 55, 55, 1)"} sx={{ fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>Patient ID:</Typography>
                            <Typography sx={{ color: "rgba(164, 164, 164, 1)", fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>AEH-XYZ-123456</Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={3.2} sx={{ width: "100%" }} sm={3}>
                        <Stack alignItems={"center"} flexDirection={"row"}>
                            <Typography sx={{ color: "rgba(55, 55, 55, 1)", fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>Doctor</Typography>
                            <Box sx={{ width: "100%", marginLeft: "0.7rem" }}>
                                <SelectInp labelSpace={"Neil Down"} selectInpLabel={"Neil Down"} />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item md={2.2} sm={3}>
                        <Stack justifyContent={"end"} flexDirection={"row"} paddingRight={{ md: "0.4rem" }}>
                            <Box>
                                <Button size="small" sx={{ bgcolor: "rgba(2, 184, 1, 1)", fontSize: { sm: "0.7rem", md: "0.75rem", lg: "0.85rem" }, color: "white", marginRight: "0.4rem", "&:hover": { backgroundColor: "green", } }} variant="contained">Save</Button>
                                <Button size="small" sx={{ fontSize: { sm: "0.7rem", md: "0.75rem", lg: "0.85rem", } }} variant="contained">Close</Button>
                            </Box>
                        </Stack>
                    </Grid>

                </Grid>

                {/* ********Error******* */}

                <Box marginY={"1.2rem"} display={{ sm: "none", md: "block" }} paddingX={"0.6rem"}>
                    <Stack flexDirection={"row"} >
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Glasses/lens adviced"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Investigation"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Diagnosis"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Medications"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Procedure(s)"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Follow-up"} />
                        <Box sx={{ borderRight: "0.13rem solid", borderColor: "rgba(217, 217, 217, 1)", marginRight: "1rem" }}></Box>
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Not Filled"} />
                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingRight={"0.7rem"}>
                            <img src={tick} />
                            <Typography sx={{ color: "rgba(2, 184, 1, 1)", fontSize: "0.8rem", paddingX: "0.1rem" }}>Filled</Typography>
                        </Stack>
                    </Stack>
                </Box>

                {/* *********Error SM******** */}

                <Grid container marginY={"1rem"} rowSpacing={0.5} display={{ md: "none" }} paddingX={"0.6rem"}>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Glasses/lens adviced"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Investigation"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Diagnosis"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Medications"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Procedure(s)"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Follow-up"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Not Filled"} />
                    </Grid>
                    <Grid item>

                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingRight={"0.7rem"}>
                            <img src={tick} />
                            <Typography sx={{ color: "rgba(2, 184, 1, 1)", fontSize: "0.8rem", paddingX: "0.1rem" }}>Filled</Typography>
                        </Stack>
                    </Grid>
                </Grid>

                {/* *******Navigation Button********** */}
                <Box sx={{ border: "1px solid rgba(105, 105, 105, 0.5)", marginX: "0.9rem" , display:{sm:"none", md:"block"} , backgroundColor:"#f3f1f1"}}>

                    <Stack flexDirection={"row"} sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)", width: "100%", display: { sm: "none", md: "flex" }, }}>

                        <Stack flexDirection={"row"}>
                            <Box sx={{
                                width: {
                                    md: "8.5rem",
                                    lg: "11.5rem"
                                },
                                height: "3rem",
                                background: '#f3f1f1',
                                clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                            }}>
                                <ButtonComp backgroundColor="white" mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} label={"History"} width={"100%"} />
                            </Box>
                            <NavigationBar label={"Refraction"} />
                            <NavigationBar label={"Examination"} />
                            <NavigationBar label={"Investigation"} />
                            <NavigationBar label={"Diagnosis"} />
                            <NavigationBar label={"Advice"} />
                        </Stack>
                        <Stack flexDirection={"row"} justifyContent={"end"} sx={{ width: "100%" }}>

                            <Stack flexDirection={"row"} justifyContent={"end"}>
                                <Box sx={{
                                    clipPath: 'circle(41% at 50% 50%)'
                                }}>
                                    <ButtonComp backgroundColor={"white"} color={"black"} label={"<"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                                </Box>
                                <Box sx={{

                                    clipPath: 'circle(41% at 50% 50%)'
                                }}>
                                    <ButtonComp backgroundColor={"white"} color={"black"} label={">"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box item md={12}>

                        <HistoryComp />
                        {/* <Refraction /> */}
                    </Box>
                </Box>

                {/* ********sm Navigation Btn******* */}

                <Box paddingX={"0.7rem"}>
                
                <Grid container display={{ md: "none" }} bgcolor={"#f3f1f1"} sx={{ border:"1px solid rgba(105, 105, 105, 0.5)"}}>
                    <Grid item sm={12} paddingX={"0.6rem"}>
                        <Stack flexDirection={"row"} sx={{ width: "100%", marginTop: "0.7rem" }}>
                            <Stack flexDirection={"row"}>
                                <Box sx={{
                                    width: "9rem",
                                    height: "3rem",
                                    background: 'white',
                                    clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                                }}>
                                    <ButtonComp backgroundColor={"white"} smFontSize={"0.7rem"} mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} label={"History"} width={"100%"} />
                                </Box>
                                <NavigationBar label={"Refraction"} />
                                <NavigationBar label={"Examination"} />
                                <NavigationBar label={"Investigation"} />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item sm={12} paddingX={"0.6rem"} sx={{borderBottom:"1px solid rgba(105, 105, 105, 0.5)", paddingBottom:"0.8rem"}}>
                        <Stack flexDirection={"row"} sx={{ width: "100%", marginTop: "1rem" }}>
                            <Stack flexDirection={"row"}>
                                <Box sx={{
                                    width: "9rem",
                                    height: "3rem",
                                    background: 'white',
                                    clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                                }}>
                                    <ButtonComp backgroundColor={"white"} smFontSize={"0.7rem"} mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} label={"Diagnosis"} width={"100%"} />
                                </Box>
                                <NavigationBar label={"Advice"} />
                                <Stack flexDirection={"row"} justifyContent={"end"}>
                                    <Box sx={{
                                        clipPath: 'circle(41% at 50% 50%)'
                                    }}>
                                        <ButtonComp backgroundColor={"white"} color={"black"} label={"<"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                                    </Box>
                                    <Box sx={{

                                        clipPath: 'circle(41% at 50% 50%)'
                                    }}>
                                        <ButtonComp backgroundColor={"white"} color={"black"} label={">"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>


                    </Grid>
                    <Grid item sm={12}>

                        <HistoryComp />
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </>
    )
}

export default History;