import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SelectInp from "../MiniComp/SelectInp"
import error from "../../images/error.png"
import ErrorComp from "./ErrorComp";
import tick from "../../images/tick.png"
import ButtonComp from "../MiniComp/ButtonComp";
import rightArrow from "../../images/rightArrow.svg"
import rightAngle from "../../svg/rightAngle.svg"
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigationBar from "../Navigation/NavigationBar";
import HistoryBtn from "./HistoryBtn";
import TextFieldInp from "../MiniComp/TextFieldInp";

function History() {

    return (
        <>
            <Box>
                <Grid container height={"3.5rem"} alignItems={"center"} sx={{ borderBottom: "1px solid black" }}>
                    <Grid item md={2} >
                        <Typography sx={{ fontSize: "1.3rem", color: "rgba(164, 164, 164, 1)" }}>Eye Template</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography sx={{ color: "rgba(164, 164, 164, 1)", fontSize: "1.05rem" }}>
                            Mr. Ray O’Son/24/Male
                        </Typography>
                    </Grid>
                    <Grid item md={2.6}>
                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Typography color={"rgba(55, 55, 55, 1)"}>Patient ID:</Typography>
                            <Typography sx={{ color: "rgba(164, 164, 164, 1)" }}>AEH-XYZ-123456</Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={3.2} sx={{ width: "100%" }}>
                        <Stack alignItems={"center"} flexDirection={"row"}>
                            <Typography sx={{ color: "rgba(55, 55, 55, 1)" }}>Doctor</Typography>
                            <Box sx={{ width: "100%", marginLeft: "0.7rem" }}>
                                <SelectInp selectInpLabel={"Neil Down"} />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item md={2.2}>
                        <Stack justifyContent={"end"} flexDirection={"row"} paddingRight={"0.4rem"}>
                            <Box>
                                <Button size="small" sx={{ bgcolor: "rgba(2, 184, 1, 1)", color: "white", marginRight: "0.4rem" }} variant="contained">Save</Button>
                                <Button size="small" variant="contained">Close</Button>
                            </Box>
                        </Stack>
                    </Grid>

                </Grid>

                <Box>
                    <Stack flexDirection={"row"} >
                        <ErrorComp label={"Glasses/lens adviced"} />
                        <ErrorComp label={"Investigation"} />
                        <ErrorComp label={"Diagnosis"} />
                        <ErrorComp label={"Medications"} />
                        <ErrorComp label={"Procedure(s)"} />
                        <ErrorComp label={"Follow-up"} />
                        <Box sx={{ borderRight: "0.13rem solid", borderColor: "rgba(217, 217, 217, 1)", marginRight: "1rem" }}></Box>
                        <ErrorComp label={"Not Filled"} />
                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingRight={"0.7rem"}>
                            <img src={tick} />
                            <Typography sx={{ color: "rgba(2, 184, 1, 1)", fontSize: "0.9rem", paddingX: "0.1rem" }}>Filled</Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Stack flexDirection={"row"} sx={{ width: "100%" }}>
                    <Stack flexDirection={"row"}>
                        <Box sx={{
                            width: "11.5rem",
                            height: "3rem",
                            background: 'red',
                            clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                        }}>
                            <ButtonComp label={"History"} width={"100%"} />
                        </Box>
                        <NavigationBar label={"Refraction"} />
                        <NavigationBar label={"Examination"} />
                        <NavigationBar label={"Investigation"} />
                        <NavigationBar label={"Diagnosis"} />
                        <NavigationBar label={"Advice"} />
                    </Stack>
                    <Stack sx={{ width: "27%" }} flexDirection={"row"} justifyContent={"end"} >
                        <Box sx={{
                            width: "3rem", height: "3rem", background: 'red', marginRight: "0.3rem", display: "flex", justifyContent: "center", alignItems: "center",
                            clipPath: 'circle(47% at 50% 50%)'
                        }}>
                            <ButtonComp label={"<"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                        </Box>
                        <Box sx={{
                            width: "3rem", height: "3rem", background: 'red', display: "flex", justifyContent: "center", alignItems: "center",
                            clipPath: 'circle(47% at 50% 50%)'
                        }}>
                            <ButtonComp label={">"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                        </Box>
                    </Stack>
                </Stack>

                <Stack sx={{ bgcolor: "lightblue" }} alignItems={"center"} justifyContent={"center"}>
                    <Grid container>
                        <Grid item md={1} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                            <Typography color={"rgba(55, 55, 55, 1)"} sx={{ fontSize: "0.9rem" }}>Visit :</Typography>
                        </Grid>
                        <Grid item md={5.5} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                            <Stack flexDirection={"row"}>
                                <HistoryBtn label={"General Checkup"} />
                                <HistoryBtn label={"Routine Checkup"} />
                                <HistoryBtn label={"PostOp Checkup"} />
                            </Stack>
                        </Grid>
                        <Grid item md={5.5} justifyContent={"start"} paddingLeft={"1rem"} alignItems={"center"} display={"flex"}>
                            <TextFieldInp label={"Free Text"} width={"80%"} />
                        </Grid>
                    </Grid>
                </Stack>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* <Typography>Cheif Complaints</Typography> */}

                    <Grid container>
                        <Grid item>
                            <HistoryBtn label={"Blurring/Diminuition of vision"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Redness"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Pain"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Injury"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Watering"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Discharge"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Dryness"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Itching"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"FBsensation"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Deviation/Squint"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Headache/Strain"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Change in Size/Shape"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Other Visual Symptoms"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Shadow/Defect in vision"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Discoloration of Eye"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Swelling"} />
                        </Grid>
                        <Grid item>
                            <HistoryBtn label={"Burning Sensation"} />
                        </Grid>
                    </Grid>
                </Box>

                

            </Box>
        </>
    )
}

export default History;