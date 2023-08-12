import * as React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface Well {
  depth?: number;
  pipediameter?: number;
  pumpmodel?: string;
  geox?: number;
  geoy?: number;
}

const wellData: Well = {
  depth: 120,
  pipediameter: 4,
  pumpmodel: 'Model-A',
  geox: 42,
  geoy: 55
};

const WellView: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1">{`Depth: ${wellData.depth ?? 'Unknown'}`}</Typography>
        <Typography variant="body1">{`Pipe Diameter: ${wellData.pipediameter ?? 'Unknown'}`}</Typography>
      </Box>
      <Typography variant="body1">{`Pump Model: ${wellData.pumpmodel ?? 'Unknown'}`}</Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1">{`Geo X: ${wellData.geox ?? 'Unknown'}`}</Typography>
        <Typography variant="body1">{`Geo Y: ${wellData.geoy ?? 'Unknown'}`}</Typography>
      </Box>
    </Paper>
  );
};

export default WellView;
