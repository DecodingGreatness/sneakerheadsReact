import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const BrandFilter = () => {
  return (
    <div>
      <h1>Brand</h1>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Nike" />
        <FormControlLabel disable control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </div>
  );
};

export default BrandFilter;
