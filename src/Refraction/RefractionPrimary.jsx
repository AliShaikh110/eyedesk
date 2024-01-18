// *******sph positive and negative*******

import { Grid, Typography} from "@mui/material";
import React, { useState } from "react";
import ButtonComp from "../component/MiniComp/ButtonComp";
import TextFieldInp from "../component/MiniComp/TextFieldInp";


export  function SphPositiveMaping() {
    const [value, setValue] = useState('');
    const start = 0.00;
    const end = 25.00;
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
                            <ButtonComp width={"100%"} mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export  function ContrastSensiMaping() {
    const [value, setValue] = useState('');
    const start = 2.25;
    const end = 0.00;
    const decrement = 0.15;
    const numbersArray = [];

    for (let i = start; i >= end; i -= decrement) {
        numbersArray.push(i.toFixed(2));
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
                        <Grid item sm={1.5} md={1.5} key={i}>
                            <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} backgroundColor={"white"} width={"100%"} minWidth={"0px"} onClick={() => onSet(key)} label={key} color={"black"} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export  function SphNegativeMaping() {
    const [value, setValue] = useState('');
    const start = 0;
    const end = 25;
    const increment = 0.25;
    const numbersArray = [];
    
    for (let i = start; i <= end; i += increment) {
        numbersArray.push("-" + i.toFixed(2));
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
                            <ButtonComp mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} width={"100%"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export  function CylPositiveMaping() {
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
                            <ButtonComp mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} width={"100%"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export  function CylNegativeMaping() {
    const [value, setValue] = useState('');
    const start = 0;
    const end = 9.50;
    const increment = 0.25;
    const numbersArray = [];
    
    for (let i = start; i <= end; i += increment) {
        numbersArray.push("-" + i.toFixed(2));
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
                            <ButtonComp mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} width={"100%"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export  function AxisMaping() {
    const [value, setValue] = useState('');
    const start = 5;
    const end = 180;
    const increment = 5;
    const numbersArray = [];
    
    for (let i = start; i <= end; i += increment) {
        numbersArray.push(i);
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
                            <ButtonComp mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} width={"100%"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

// *********Ucva first and second button*******


export function UcvaFirstMaping() {
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
                        <Grid item sm={1.3333} md={1.5} key={i}>
                            <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} backgroundColor={"white"} width={"100%"} minWidth={"0px"} onClick={() => onSet(key)} label={key} color={"black"} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}


export function UcvaSecondMaping() {
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
                        <Grid item sm={1.3333} md={1.5} key={i}>
                            <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} backgroundColor={"white"} width={"100%"} minWidth={"0px"} onClick={() => onSet(key)} label={key} color={"black"} />


                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

// ********Four and Five Column inp Table********

export  function ThreeColInpTable({
    oneRowOneCol,
    secRowOneCol
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={4} md={4}><Typography variant="subtitle1" fontWeight={600} color={"white"}></Typography> </Grid>
                        <Grid item sm={4} md={4}><Typography variant="subtitle1" fontWeight={600} color={"white"}></Typography> </Grid>
                        <Grid item sm={4} md={4}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>Axis</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"transparent"} label={oneRowOneCol} disabled={true}/></Grid>
                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"white"} /></Grid>

                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"transparent"} label={secRowOneCol} /></Grid>
                <Grid item sm={4} md={4}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"white"}/></Grid>

            </Grid>
        </>
    )
}

export  function FourColInpTable({
    inpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={3} md={3}></Grid>
                        <Grid item sm={3} md={3}><Typography variant="subtitle1" fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Sph</Typography> </Grid>
                        <Grid item sm={3} md={3}><Typography variant="subtitle1" fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Cyl</Typography> </Grid>
                        <Grid item sm={3} md={3}><Typography variant="subtitle1" fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Axis</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"} label={inpLabel} disabled={true}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item sm={3} md={3}><TextFieldInp   backgroundColor={"white"}/></Grid>

                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
                <Grid item sm={3} md={3}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>

                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
            </Grid>
        </>
    )
}

export  function SixColInpTable({
    firstInpLabel,
    secondInpLabel,
    thirdInpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={2} md={2}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>BC</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>DIA</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>SPH</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>CYL</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>AXIS</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>ADD</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={2} md={2}><TextFieldInp  backgroundColor={"transparent"} /></Grid>
                <Grid item sm={2} md={2}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2} md={2}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item sm={2} md={2}><TextFieldInp   backgroundColor={"white"}/></Grid>
                <Grid item sm={2} md={2}><TextFieldInp   backgroundColor={"white"}/></Grid>
                <Grid item sm={2} md={2}><TextFieldInp   backgroundColor={"white"}/></Grid>

                
            </Grid>
        </>
    )
}

export  function FiveColInpTable({
    firstInpLabel,
    secondInpLabel,
    thirdInpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={2.4} md={2.4}></Grid>
                        <Grid item sm={2.4} md={2.4}><Typography variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Sph</Typography> </Grid>
                        <Grid item sm={2.4} md={2.4}><Typography variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Cyl</Typography> </Grid>
                        <Grid item sm={2.4} md={2.4}><Typography variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Axis</Typography> </Grid>
                        <Grid item sm={2.4} md={2.4}><Typography variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Vision</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"transparent"} label={firstInpLabel} disabled={true}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp   backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp   backgroundColor={"white"}/></Grid>

                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"transparent"}  label={secondInpLabel}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>

                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"transparent"} label={thirdInpLabel} /></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
            </Grid>
        </>
    )
}