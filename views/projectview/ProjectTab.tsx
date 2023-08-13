import * as React from 'react';
import { Box } from '@mui/material';
import ProjectView from './ProjectView';
import WellView from './WellView';
import ServiceReportWrapper from './ServiceReportWrapper';

const ProjectTab: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%"> {/* Added padding to the outer container */}
      <Box height="30%" paddingBottom="10px"> {/* Added padding to the bottom */}
        <ProjectView />
      </Box>
      <Box display="flex" flexDirection="row" height="100%">
        <Box width="50%" paddingRight="8px" minHeight={'40vh'}> {/* Added padding to the right */}
          <WellView />
        </Box>
        <Box width="50%" paddingLeft="8px" minHeight={'40vh'}> {/* Added padding to the left */}
          <ServiceReportWrapper />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectTab;
