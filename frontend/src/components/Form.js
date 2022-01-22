import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography, Grid, Button } from "@mui/material";

export default function Form() {
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
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Low"
              />
              <FormControlLabel value="male" control={<Radio />} label="Mid" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="High"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6} md={6}>
            <FormLabel id="demo-radio-buttons-group-label">Label</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Electrical" />
              <FormControlLabel control={<Checkbox />} label="Mechanical" />
              <FormControlLabel control={<Checkbox />} label="Landscape" />
              <FormControlLabel control={<Checkbox />} label="Plumbing" />
            </FormGroup>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}
