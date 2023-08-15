import * as React from 'react';
import { Box, Paper, List, ListItemButton, ListItemText } from '@mui/material';
import ServiceReportView, { ServiceReportViewProps } from './ServiceReportView';

// Same interface as ServiceReport
interface ServiceReport {
  activitytype: string;
  reportdate: Date;
  description: string;
}

const ProjectServiceWrapper: React.FC = () => {
  const [selectedReport, setSelectedReport] = React.useState<ServiceReport | null>(null);

  // Sample data for ServiceReports - you can replace with actual data
  const reports: ServiceReport[] = [
    {
      activitytype: 'Maintenance',
      reportdate: new Date('2023-08-12T10:00:00'),
      description: 'Performed routine maintenance on the main pump...',
    },
    // Add more reports as needed
  ];

  // Function to handle back button click
  const handleBack = () => {
    setSelectedReport(null);
  };

  return (
    <Box>
      {selectedReport ? (
        <ServiceReportView report={selectedReport} onBack={handleBack} />
      ) : (
        <Paper elevation={3} style={{ padding: '5px', overflow: 'auto', height: '58vh' }}>
          <List>
            {reports.map((report, index) => (
              <ListItemButton
                key={index}
                onClick={() => setSelectedReport(report)}
                sx={{
                  padding: '4px',
                  marginBottom: '4px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <ListItemText primary={`Service Report: ${report.reportdate.toLocaleString()}`} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default ProjectServiceWrapper;
