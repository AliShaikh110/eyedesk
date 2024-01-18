import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import TextFieldInp from "../MiniComp/TextFieldInp";
import HistoryBtn from "./HistoryBtn";
import InpLabHistory from "./InpLabHistory";
import SelectInp from "../MiniComp/SelectInp"

function HistoryComp() {

    return (
        <>
            <Box bgcolor={"#f3f1f1"} paddingX={"1rem"}>

                {/* ***********Visit and Buttons********** */}

                <Stack alignItems={"center"} justifyContent={"center"} paddingTop={{ sm: "1.5rem", md: "1rem" }}>
                    <Grid container rowSpacing={{ sm: 1.5 }}>
                        <Grid item sm={12} md={1} lg={1} alignItems={"center"} display={"flex"}>
                            <Typography marginBottom={{ sm: "-0.5rem" }} color={"rgba(55, 55, 55, 1)"} sx={{ fontSize: "0.9rem" }}>Visit :</Typography>
                        </Grid>
                        <Grid item sm={9} md={6.5} lg={5.5} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                            <Grid container >
                                <Grid item md={4}>
                                    <HistoryBtn label={"General Checkup"} />
                                </Grid>
                                <Grid item md={4}>
                                    <HistoryBtn label={"Routine Checkup"} />
                                </Grid>
                                <Grid item md={4}>
                                    <HistoryBtn label={"PostOp Checkup"} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={9} md={4.5} lg={5.5} justifyContent={"start"} paddingLeft={{ sm: "0rem", md: "1rem" }} alignItems={"center"} display={"flex"}>
                            <TextFieldInp label={"Free Text"} backgroundColor={"white"} width={"80%"} />
                        </Grid>
                    </Grid>
                </Stack>

                {/* *******Chief complaints and Buttons******* */}

                <Box sx={{ display: "flex", flexDirection: "column" }} marginTop={{ sm: "1.5rem", md: "1rem" }}>
                    <Typography marginBottom={{ sm: "0.4rem", md: "0.7rem" }}>Cheif Complaints</Typography>

                    <Grid container rowSpacing={"0.2rem"} columnSpacing={"0.1rem"}>
                        <Grid item md={3.35} lg={2.8} sm={5.3} >
                            <HistoryBtn label={"Blurring/Diminuition of vision"} />
                        </Grid>
                        <Grid item md={1} lg={1.1} sm={1.75}>
                            <HistoryBtn label={"Redness"} />
                        </Grid>
                        <Grid item md={1} lg={1} sm={1.5}>
                            <HistoryBtn label={"Pain"} />
                        </Grid>
                        <Grid item md={1} lg={1} sm={1.65}>
                            <HistoryBtn label={"Injury"} />
                        </Grid>
                        <Grid item md={1.05} lg={1.19} sm={1.8} >
                            <HistoryBtn label={"Watering"} />
                        </Grid>
                        <Grid item md={1.15} lg={1.24} sm={1.7}>
                            <HistoryBtn label={"Discharge"} />
                        </Grid>
                        <Grid item md={1} lg={1.19} sm={1.55} >
                            <HistoryBtn label={"Dryness"} />
                        </Grid>
                        <Grid item md={1} lg={1.1} sm={1.45}>
                            <HistoryBtn label={"Itching"} />
                        </Grid>
                        <Grid item md={1.45} lg={1.38} sm={2.1}>
                            <HistoryBtn label={"FBsensation"} />
                        </Grid>
                        <Grid item md={2} lg={1.67} sm={2.65} >
                            <HistoryBtn label={"Deviation/Squint"} />
                        </Grid>
                        <Grid item md={1.95} lg={1.73} sm={2.55}>
                            <HistoryBtn label={"Headache/Strain"} />
                        </Grid>
                        <Grid item md={2.5} lg={2.15} sm={3.60}>
                            <HistoryBtn padding={"10px 6px"} label={"Change in Size/Shape"} />
                        </Grid>
                        <Grid item md={2.75} lg={2.2} sm={4.1} >
                            <HistoryBtn label={"Other Visual Symptoms"} />
                        </Grid>
                        <Grid item md={2.8} lg={2.25} sm={4.3}>
                            <HistoryBtn label={"Shadow/Defect in vision"} />
                        </Grid>
                        <Grid item md={2.6} lg={2} sm={3.9}>
                            <HistoryBtn label={"Discoloration of Eye"} />
                        </Grid>
                        <Grid item md={1.2} lg={1.06} sm={2} >
                            <HistoryBtn label={"Swelling"} />
                        </Grid>
                        <Grid item md={2.3} lg={2} sm={3.5}>
                            <HistoryBtn label={"Burning Sensation"} />
                        </Grid>
                    </Grid>
                </Box>

                {/* *********Name and Input********** */}

                <Grid container columnSpacing={"2.5rem"} rowSpacing={{ sm: 1.5, md: 0.2 }} marginTop={{ sm: "1.5rem", md: "1.5rem" }} >
                    <Grid item md={12} sm={2} >
                        <Typography marginBottom={{ sm: "-0.4rem" }} fontSize={"1rem"}>Name</Typography>

                    </Grid>
                    <Grid item md={1.2} sm={9}>
                        <Typography height={"100%"} fontSize={"0.9rem"} justifyContent={"center"} flexDirection={"column"} display={"flex"} >Discharge</Typography>
                    </Grid>
                    <Grid item md={2.7} sm={6}>
                        <SelectInp fontSize={"0.9rem"} bgcolor={"white"} labelSpace={"Side"} selectInpLabel={"Side"} />
                    </Grid>
                    <Grid item md={2.7} sm={6}>
                        <SelectInp fontSize={"0.9rem"} bgcolor={"white"} labelSpace={"Duration"} selectInpLabel={"Duration"} />
                    </Grid>
                    <Grid item md={2.7} sm={6}>
                        <SelectInp fontSize={"0.9rem"} bgcolor={"white"} labelSpace={"Duration Unit"} selectInpLabel={"Duration Unit"} />
                    </Grid>
                    <Grid item md={2.7} sm={6} >
                        <TextFieldInp mdFontSize={"0.7rem"} lgFontSize={"0.9rem"} backgroundColor={"white"} labelSpace={"Comment"} label={"Comment"} />
                    </Grid>
                </Grid>

                {/* *******Viatl and anthropometry signs********* */}

                <Grid container columnSpacing={2} rowSpacing={1.5} marginTop={{ sm: "1.5rem", md: "1rem", lg: "0.2rem" }} paddingBottom={"1rem"} sx={{ width: "100%", boxSizing: "border-box" }}>
                    <Grid item md={6} sm={12}>

                        <Grid container rowSpacing={{ sm: 1.5, md: 2.5, lg: 3 }} columnSpacing={{ sm: "2.5rem", md: 3, lg: 5 }} paddingRight={{ md: "1.5rem", lg: "2.9rem" }}>
                            <Grid item md={12} sm={12} marginBottom={{ sm: "-0.7rem" }}><Typography variant="subtitle1">Vital Signs</Typography></Grid>

                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"°C"} label={"label"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"mmHg"} label={"Blood Pressure"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"bpm"} label={"Pulse"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"brpm"} label={"RR"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"%"} label={"SpO2"} />
                            </Grid>
                            <Grid item md={12} sm={12}>
                                <TextFieldInp backgroundColor={"white"} width={"100%"} label={"Vital Sign Comment"} fontSize={"0.85rem"} size={"large"} />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item md={6} sm={12}>

                        <Grid container rowSpacing={{ sm: 1.5, md: 2.5, lg: 3 }} columnSpacing={{ sm: "2.5rem", md: 3, lg: 5 }} marginTop={{ sm: "0.5rem" }} paddingLeft={{ md: "1.5rem", lg: "2.9rem" }}>
                            <Grid item md={12} marginBottom={{ sm: "-0.7rem" }} sm={12}><Typography variant="subtitle1">Anthropometry</Typography></Grid>


                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"cms"} label={"Height"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"kg"} label={"Weight"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"kg/m2"} label={"BMI"} />
                            </Grid>
                            <Grid item md={12} sm={12}>
                                <TextFieldInp backgroundColor={"white"} width={"100%"} label={"Anthropometry Comment"} fontSize={"0.85rem"} size={"large"} />
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default HistoryComp;