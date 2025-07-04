import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface ServiceReport {
  activitytype: string;
  reportdate: Date;
  description: string;
}

export interface ServiceReportViewProps {
  report: ServiceReport;
  onBack: () => void;
}

const ServiceReportView: React.FC<ServiceReportViewProps> = ({ report, onBack }) => {
  return (
    <Paper elevation={3}>
<IconButton onClick={onBack} style={{ position: 'absolute', marginTop: '10px', right: '70px' }}>
  <ArrowBackIcon style={{ color: 'black' }} />
</IconButton>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Activity Type</TableCell>
            <TableCell>Report Date</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{report.activitytype}</TableCell>
            <TableCell>{report.reportdate.toLocaleString()}</TableCell>
            <TableCell>
              <Typography variant="body2" style={{ whiteSpace: 'pre-line', height: '25vh' }}>
                {report.description}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ServiceReportView;
