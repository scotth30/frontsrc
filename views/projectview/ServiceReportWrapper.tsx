// ServiceReportWrapper.tsx
import * as React from 'react';
import { Box, Paper, List, ListItemButton, ListItemText, IconButton } from '@mui/material';
import ServiceReportView from './ServiceReportView';

// Sample interface for ServiceReport data
interface ServiceReport {
  activitytype: string;
  reportdate: Date;
  description: string;
}

const ServiceReportWrapper: React.FC = () => {
  const [selectedReport, setSelectedReport] = React.useState<ServiceReport | null>(null);

  // Test data for ServiceReports
  const reports: ServiceReport[] = [
    {
      activitytype: 'Maintenance',
      reportdate: new Date('2023-08-12T10:00:00'),
      description: 'Performed routine maintenance on the main pump...',
    },
    {
      activitytype: 'Inspection',
      reportdate: new Date('2023-08-05T09:00:00'),
      description: 'Conducted a detailed inspection of the entire system...',
    },
    // Add more test reports as needed
  ];

  // Function to handle back button click
  const handleBack = () => {
    setSelectedReport(null);
  };

  return (
    <Box>
      {selectedReport ? (
        <Paper elevation={3} style={{ padding: '5px', overflow: 'auto', height: '49vh' }}>
          <IconButton onClick={handleBack} style={{ position: 'absolute', right: 0 }}>
          </IconButton>
          <ServiceReportView report={selectedReport} onBack={handleBack} />
        </Paper>
      ) : (
        <Paper elevation={3} style={{ padding: '5px', overflow: 'auto', height: '49vh' }}>
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

export default ServiceReportWrapper;
