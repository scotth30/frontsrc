// ProjectView.tsx
import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Define the Project type based on the database table structure
interface Project {
  projectname: string;
  business: string;
  completionstatus: string;
  startdate: Date;
  enddate: Date;
  expense: number;
  cost: number;
}

// Component for Project View
const ProjectView: React.FC = () => {
  // Test data
  const projectData: Project = {
    projectname: 'New Water Pump Installation',
    business: 'WaterCorp',
    completionstatus: 'In Progress',
    startdate: new Date('2023-01-15T00:00:00'),
    enddate: new Date('2023-06-15T00:00:00'),
    expense: 12000,
    cost: 15000,
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Business</TableCell>
            <TableCell>Completion Status</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Expense</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{projectData.projectname}</TableCell>
            <TableCell>{projectData.business}</TableCell>
            <TableCell>{projectData.completionstatus}</TableCell>
            <TableCell>{projectData.startdate.toLocaleString()}</TableCell>
            <TableCell>{projectData.enddate.toLocaleString()}</TableCell>
            <TableCell>{`$${projectData.expense.toLocaleString()}`}</TableCell>
            <TableCell>{`$${projectData.cost.toLocaleString()}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ProjectView;
