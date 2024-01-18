import { Grid3x3 } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComp from "../MiniComp/ButtonComp";


function CylPositive() {
    const [value, setValue] = useState('');
    const start = 0;
    const end = 9.50;
    const increment = 0.25;
    const numbersArray = [];
    
    for (let i = start; i <= end; i += increment) {
        numbersArray.push("+" + i.toFixed(2));
    }
    
    const onSet = (params) => {
        setValue(params);
    }

    console.log(value);

    return (
        <>
            <Grid container spacing={"0.1rem"}>
                {numbersArray.map((key, i) => {
                    return (
                        <Grid item md={0.63} key={i}>
                            <ButtonComp width={"100%"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default CylPositive;