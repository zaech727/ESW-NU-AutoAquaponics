import React from "react";
import ComingSoon from "../Components/ComingSoon";
import { Grid } from "@mui/material";
import {FormControl} from "@mui/material"
import { InputLabel } from "@mui/material"
import { FilledInput} from "@mui/material"

export const Settings = () => {
    return (
        <div className="Pages">
            <Grid
        container
        spacing={-2}
        columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
        >
            
  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="component-filled">Phone Number</InputLabel>
                <FilledInput type="number" id="component-filled" onChange={0}     />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 320 }}>
                <InputLabel htmlFor="component-filled">Email</InputLabel>
                <FilledInput type="string" id="component-filled" onChange={0} />
            </FormControl>
            <button className="button-18" role="button">
          Save
        </button>
        </Grid>
          
        </div>
    );
}

// export default Settings;
