import React, { useState } from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Calculator: React.FC = () => {
  const [formValues, setFormValues] = useState({
    casingOD: 0,
    casingWallThickness: 0,
    totalDepth: 0,
    staticWaterLevel: 0,
    boreholeDiameter: 0,
  });
  const [results, setResults] = useState<any>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: parseFloat(value) });
  };

  const handleCalculate = () => {
    const casingID = formValues.casingOD - 2 * formValues.casingWallThickness;
    const rCasing = casingID / 12;
    const xCasing = rCasing * rCasing;
    const Ncasing = xCasing * Math.PI;
    const totalVolumeCubicFeet = Ncasing * formValues.totalDepth;
    const totalVolumeCubicYards = totalVolumeCubicFeet / 27; // Conversion from cubic feet to cubic yards
    const Dh = formValues.boreholeDiameter;
    const Dp = casingID;
    const annularCapacityGalPerFt = (Math.pow(Dh, 2) - Math.pow(Dp, 2)) / 24.51;
    const gallonsInWell = (formValues.totalDepth - formValues.staticWaterLevel) * Ncasing * 7.48052;

    setResults({
      casingID,
      totalVolumeCubicFeet,
      totalVolumeCubicYards,
      gallonsInWell,
      annularCapacityGalPerFt,
    });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <StyledPaper elevation={3}>
        <StyledTextField
          label="Casing OD (in)"
          placeholder="Enter Casing OD in inches"
          name="casingOD"
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Casing Wall Thickness (in)"
          placeholder="Enter Casing Wall Thickness in inches"
          name="casingWallThickness"
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Total Depth (ft)"
          placeholder="Enter Total Depth in feet"
          name="totalDepth"
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Static Water Level (ft)"
          placeholder="Enter Static Water Level in feet"
          name="staticWaterLevel"
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Borehole Diameter (in)"
          placeholder="Enter Borehole Diameter in inches"
          name="boreholeDiameter"
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleCalculate}>
          Calculate
        </Button>
        {results && (
          <ResultsDiv>
            <Typography variant="h6">Results:</Typography>
            <Typography>CasingID: {results.casingID.toFixed(4)} in</Typography>
            <Typography>Total Well Volume: {results.totalVolumeCubicFeet.toFixed(4)} cubic feet</Typography>
            <Typography>Total Well Volume: {results.totalVolumeCubicYards.toFixed(4)} cubic yards</Typography>
            <Typography>Gallons in Well: {results.gallonsInWell.toFixed(4)} gallons</Typography>
            <Typography>Annular Capacity per Foot: {results.annularCapacityGalPerFt.toFixed(4)} gallons</Typography>
          </ResultsDiv>
        )}
      </StyledPaper>
    </Box>
  );
};

const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 10px;
`;

const ResultsDiv = styled('div')`
  margin-top: 20px;
`;

export default Calculator;
