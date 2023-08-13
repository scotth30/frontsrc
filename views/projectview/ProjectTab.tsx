import * as React from 'react';
import { Box } from '@mui/material';
import ProjectView from './ProjectView';
import WellView from './WellView';
import ServiceReportWrapper from './ServiceReportWrapper';

const ProjectTab: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="48vh"> {/* Added padding to the outer container */}
      <Box height="30%" width={'100%'} paddingBottom="5px"> {/* Added padding to the bottom */}
        <ProjectView />
      </Box>
      <Box display="flex" flexDirection="row" height="100%">
        <Box width="30%" paddingRight="5px" minHeight={'49vh'}> {/* Added padding to the right */}
          <WellView />
        </Box>
        <Box minWidth="70%" paddingLeft="5px" minHeight={'49vh'}> {/* Added padding to the left */}
          <ServiceReportWrapper />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectTab;
