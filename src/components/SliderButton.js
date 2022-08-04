import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const SliderButton = ({CurrentNum, handleInput}) => {


    return (
      <Box width={300}>
        <Slider defaultValue={178} aria-label="Default" valueLabelDisplay="auto" value={CurrentNum} onChange={handleInput} />
      </Box>
    )

}



export default SliderButton;