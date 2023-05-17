import Box from '@mui/material/Box'
import Buttons from "./Buttons";
import { useState } from "react"
import React from 'react'

const Result = (props) => {
    const { mark, corr, incorect } = props
    return (
        <>
            <div className='mx-auto'>
                <Box className="container result">
                    <h3 className='py-3'>Result</h3>
                    <span>Quiz Mark : {mark} </span><br />
                    <span>Correct Answer : {corr} </span><br />
                    <span>Incorect Answer : {incorect}</span><br />

                </Box>
            </div>
        </>
    )
}

export default Result