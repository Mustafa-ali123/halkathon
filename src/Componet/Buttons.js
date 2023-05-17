import React from 'react'
import { Button } from '@mui/material'
const Buttons = (props) => {
    let {click,classes,color,label,disabled}=props;

    return (
        <>
        
<Button onClick={click} className={classes} disabled={disabled} color={color} variant='contained' > {label?? ""}
</Button>

        </>
    )
}

export default Buttons
