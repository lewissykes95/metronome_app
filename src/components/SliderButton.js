import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const SliderButton = ({onChange, value}) => {


    return (
      <Box width={300}>
        <Slider 
            defaultValue={129} 
            aria-label="Default" 
            valueLabelDisplay="auto" 
            min={40}
            max={218} 
            value={value} 
            onChange={onChange} 
            ClassName="Slider"
        />
      </Box>
    )

}



export default SliderButton;