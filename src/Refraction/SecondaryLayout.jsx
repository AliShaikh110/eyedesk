import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import { FiveColInpTable, FourColInpTable, SixColInpTable, ThreeColInpTable, UcvaFirstMaping, UcvaSecondMaping } from "./RefractionPrimary"
import { ContactLensLayout, ContrastSensiLayout, FirstUcvaLayout, GlassesLayout, LabelCommentLayout, LabelSelectLayout, PinholeLayout, SecondUcvaLayout, SelectLabelAfterUcva } from "./PrimaryLayout"
import HeaderAuto from "../component/AutoRefractionInp/HeaderAuto"
import ArrowBtn from "../component/History/ArrowBtn"
import ForwardIcon from '@mui/icons-material/Forward';
import InpLabHistory from "../component/History/InpLabHistory"
import { LabelSelectRefraction } from "./HelpingComp"


export function VisualAcuityV3Merging({
    headLabel
}) {
    return (
        <>
            <Grid container>
                <Grid item sm={12} md={12}>
                    <HeaderAuto headLabel={headLabel} />
                </Grid>
            </Grid>

            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"}  mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"VISUAL ACUITY (V3)"} backgroundColor={"rgba(2, 184, 1, 1)"} endIcon={<ForwardIcon fontSize="large" />} />
                </Grid>
                <Grid item sm={12} md={12}>
                    <FirstUcvaLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <SecondUcvaLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <SelectLabelAfterUcva />
                </Grid>
                <Grid item sm={12} md={12}>
                    <PinholeLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <GlassesLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <SecondUcvaLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <ContactLensLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout />
                </Grid>
            </Grid>
        </>
    )
};

export function AutoRefractionAr() {
    return (
        <>

            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"AUTO REFRACTION (ARx)"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container>
                        <Grid item sm={1.5} md={1.5}>
                            <Box sx={{ width: "100%" }} className="myBtn">
                                <ArrowBtn hover label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ fontSize: "large" }} />} />
                            </Box>
                        </Grid>
                        <Grid item sm={10.5} md={10.5}>
                            <FourColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container>
                        <Grid item sm={1.5} md={1.5}></Grid>
                        <Grid item sm={10.5} md={10.5}>
                            <FourColInpTable inpLabel={"Dilated"} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export function DryRefraction() {

    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"}  mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"Dry Refraction (ARx)"} endIcon={<ForwardIcon />} />

                </Grid>

                <Grid item md={12} sm={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.5}>
                            <Box marginBottom={"0.6rem"}>
                                {/* <ArrowBtn label={"Fill"} padding={"0px 7px"} endIcon={<ForwardIcon />} /> */}

                                <Box sx={{ width: "100%" }} className="myBtn" >
                                    <ArrowBtn label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ marginLeft: "2px", fontSize: "large" }} />} />
                                </Box>

                            </Box>
                            

                            <Box className="myBtn">

                                <ArrowBtn label={"Copy"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                            {/* <ArrowBtn label={"Copy"} padding={"0px 7px"} endIcon={<ForwardIcon />} /> */}
                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} />
                </Grid>

            </Grid>
        </>
    )
}


export function RefractionDilated() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"REFRACTION (DILATED)"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.5}>
                            
                            <Box className="myBtn" marginBottom={"0.5rem"}>
                                <ArrowBtn label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                            <Box className="myBtn">
                                <ArrowBtn label={"Copy"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                            
                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelSelectRefraction smTypo={1.5} mdTypo={1.5}  label={"Drug Used"} smSelect={5} mdSelect={5} justifyContent={"start"} labelSpace={""} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} />
                </Grid>

            </Grid>
        </>
    )
}

export function Pgp1() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"PGP 1"} endIcon={<ForwardIcon />} />

                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.5}>
                        <Box className="myBtn" marginBottom={"0.5rem"}>
                                <ArrowBtn label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                            <Box className="myBtn">
                                <ArrowBtn label={"Copy"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelSelectRefraction smTypo={1.5}  mdTypo={1.5} label={"Type of Lens"} smSelect={5} mdSelect={5} justifyContent={"start"} labelSpace={""} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} />
                </Grid>

            </Grid>
        </>
    )
}

export function GlassesPrescriptions() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"GLASSES PRESCRIPTIONS (Rx)"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.5}>
                        <Box className="myBtn">
                                <ArrowBtn label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={6}>
                    <LabelSelectRefraction smTypo={3} smSelect={8} mdTypo={3} label={"Type of Lens"} mdSelect={8} justifyContent={"start"} labelSpace={""} />
                </Grid>
                <Grid item sm={1} md={1} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                    <Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.9rem"}}}>IPD</Typography>
                </Grid>
                <Grid item sm={4.94} md={4.94}>
                    <InpLabHistory sideLabel={"mm"} />
                </Grid>
                <Grid item sm={4.5} md={4.5}>
                    <LabelSelectRefraction labelSpace={""} smTypo={4} smSelect={7} mdTypo={4} label={"Lens Material"}  mdSelect={7} justifyContent={"start"} />
                </Grid>
                <Grid item sm={3.75} md={3.75}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3} label={"Lens Tint"}  mdSelect={8.5} justifyContent={"center"} />
                </Grid>
                <Grid item sm={3.75} md={3.75}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3.5} label={"Frame Material"}  mdSelect={8.5} justifyContent={"center"} />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} label={"Advice"} />
                </Grid>

            </Grid>
        </>
    )
}

export function IntermediateGlassesPrescriptions() {
    return (
        <>
            <Grid container  rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    

                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"INTERMEDIATE GLASSES PRESCRIPTIONS (Rx)"} endIcon={<ForwardIcon />} />

                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.5}>
                        <Box className="myBtn">
                            <ArrowBtn label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                        </Box>
                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={6}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3} label={"Type of Lens"} mdSelect={8} justifyContent={"start"} />
                </Grid>
                <Grid item sm={1} md={1} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                    <Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.9rem"}}}>IPD</Typography>
                </Grid>
                <Grid item sm={4.94} md={4.94}>
                    <InpLabHistory sideLabel={"mm"} />
                </Grid>
                <Grid item sm={4.5} md={4.5}>
                    <LabelSelectRefraction labelSpace={""} smTypo={4} smSelect={7} mdTypo={4} label={"Lens Material"} mdSelect={7} justifyContent={"start"} />
                </Grid>
                <Grid item sm={3.75} md={3.75}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3} label={"Lens Tint"} mdSelect={8.5} justifyContent={"center"} />
                </Grid>
                <Grid item sm={3.75} md={3.75}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3.5} label={"Frame Material"} mdSelect={8.5} justifyContent={"center"} />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} label={"Advice"} />
                </Grid>

            </Grid>
        </>
    )
}

export function Pmt() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"PMT"} endIcon={<ForwardIcon />} />

                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.5}>
                            <Box className="myBtn" marginBottom={"0.5rem"}>
                                <ArrowBtn label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                            <Box className="myBtn">
                                <ArrowBtn label={"Copy"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                            
                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>



            </Grid>
        </>
    )
}

export function Keratometry() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"} paddingX={"0.5rem"}>
                <Grid item sm={12} md={12} >

                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"KERATOMETRY (K)"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container rowSpacing={"1.5rem"}>
                        <Grid item sm={1.5} md={1.5}></Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <ThreeColInpTable oneRowOneCol={"Kh"} secRowOneCol={"Kv"} />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <LabelCommentLayout />
                        </Grid>
                    </Grid>
                </Grid>



            </Grid>
        </>
    )
}

export function ContactLensPrescriptions() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"} paddingX={"0.5rem"}>
                <Grid item sm={12} md={12} >

                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"CONTACT LENS PRESCRIPTIONS (CL)"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} >
                        <Grid item sm={1.5} md={1.5}>

                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <SixColInpTable />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <LabelCommentLayout label={"Revisit Date"} mdLabel={1.5} mdTextField={4.3} />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Grid container columnSpacing={1}>
                                <Grid item sm={15} md={1.5}></Grid>
                                <Grid item sm={6} md={5.25} >
                                    <LabelCommentLayout label={"Color"} smLabel={3} smTextField={9} mdLabel={2} mdTextField={8} />
                                </Grid>
                                <Grid item sm={6} md={5.25} >
                                    <LabelCommentLayout label={"Type"} smLabel={3} smTextField={9} mdLabel={2} mdTextField={8} justifyContent={"center"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <LabelCommentLayout label={"Advice"} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export function ColorVision() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"} paddingX={"0.5rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"COLOR VISION"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelCommentLayout label="" />
                </Grid>

            </Grid>
        </>
    )
}

export function ContrastSensi() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"} paddingX={"0.5rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"CONTRAST SENSITIVITY"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <ContrastSensiLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout />
                </Grid>

            </Grid>
        </>
    )
}

export function Orthoptics() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"} paddingX={"0.5rem"}>
                <Grid item sm={12}
                 md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"ORTHOPTICS"} endIcon={<ForwardIcon />} />
                </Grid>

                <Grid item sm={12}
                 md={12}>
                    <LabelCommentLayout label="" />
                </Grid>

            </Grid>
        </>
    )
}
