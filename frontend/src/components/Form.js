import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography, Grid, Button } from "@mui/material";

const Form = (props) => {
  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom>
        Form Input
      </Typography>
      <FormControl>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <FormLabel id="demo-radio-buttons-group-label">Priority</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                onChange={(e) => props.setPriority(e.target.value)}
                label="All"
              />
              <FormControlLabel
                value="low"
                control={<Radio />}
                onChange={(e) => props.setPriority(e.target.value)}
                label="Low"
              />
              <FormControlLabel
                value="mid"
                control={<Radio />}
                onChange={(e) => props.setPriority(e.target.value)}
                label="Mid"
              />
              <FormControlLabel
                value="high"
                control={<Radio />}
                onChange={(e) => props.setPriority(e.target.value)}
                label="High"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6} md={6}>
            <FormLabel id="demo-radio-buttons-group-label">Label</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                onChange={(e) => props.setElectrical(e.target.checked)}
                label="Electrical"
              />
              <FormControlLabel
                control={<Checkbox />}
                onChange={(e) => props.setMechanical(e.target.checked)}
                label="Mechanical"
              />
              <FormControlLabel
                control={<Checkbox />}
                onChange={(e) => props.setLandscape(e.target.checked)}
                label="Landscape"
              />
              <FormControlLabel
                control={<Checkbox />}
                onChange={(e) => props.setPlumbing(e.target.checked)}
                label="Plumbing"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};
export default Form;
