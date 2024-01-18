// *********Ucva first and second button*******
import { Grid, Typography, typographyClasses } from "@mui/material";
import React, { useState } from "react";
import ButtonComp from "../MiniComp/ButtonComp";

export function UcvaFirst() {
    const [value, setValue] = useState('');
    const [plus, setPlus] = useState("");

    const ucva = ["PL-", "PL+", "FL", "HM", "CFCF", "FC", "1/60", "2/60", "3/60", "4/60", "5/60", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9", "6/7.5", "6/6", "6/5"];
    
    const onSet = (params) => {
        setValue(params);
    }
    
    return (
        <>
            <Grid container spacing={"0.1rem"}>
                {ucva.map((key, i) => {
                    return (
                        <Grid item md={1.5} key={i}>
                            <ButtonComp mdFontSize={"0.75rem"} backgroundColor={"white"} width={"100%"} minWidth={"0px"} onClick={() => onSet(key)} label={key} color={"black"} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

// ******ucva second *********

export function UcvaSecond() {
    const [value, setValue] = useState('');

    const ucvaSecond = ["N4", "N5", "N6", "N8", "N10", "N12", "N14", "N18", "N24", "N26", "N36", "<N36", "<6/60", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9", "6/7.5", "6/6", "6/5"]
    
    const onSet = (params) => {
        setValue(params);
    }

    return (
        <>
            <Grid container spacing={"0.1rem"}>
                {ucvaSecond.map((key, i) => {
                    return (
                        <Grid item md={1.5} key={i}>
                            <ButtonComp mdFontSize={"0.75rem"} backgroundColor={"white"} width={"100%"} minWidth={"0px"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
