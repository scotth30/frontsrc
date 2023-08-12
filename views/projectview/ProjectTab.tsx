import * as React from 'react';
import { Box } from '@mui/material';
import ProjectView from './ProjectView';
import WellView from './WellView';
import ServiceReportWrapper from './ServiceReportWrapper';

const ProjectTab: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100% !important">
      <Box height="30%" paddingBottom="10px">
        <ProjectView />
      </Box>
      <Box display="flex" flexDirection="row" height="70%">
        <Box width="50%" paddingRight="8px">
          <WellView />
        </Box>
        <Box width="50%" paddingLeft="8px">
          <ServiceReportWrapper />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectTab;
