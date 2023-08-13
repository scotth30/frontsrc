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
    <Paper elevation={3} style={{ padding: '16px'}}>
      <IconButton onClick={onBack} style={{ position: 'absolute', top: '70x', right: '70px' }}>
        <ArrowBackIcon />
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
              <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>
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
