import React, { useEffect, useState } from 'react';
import { List, ListItemButton, ListItemText, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

interface Project {
  projectname: string;
  address: string;
  startdate: string;
  enddate: string;
  projectid: string;
}

const CustomerRelatedProject: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const auth = getAuth();
      if (auth.currentUser) {
        auth.currentUser.getIdToken(true).then(async (token) => {
          try {
            const response = await axios.get('/customerproject', {
              headers: { Authorization: `Bearer ${token}` },
            });
            setProjects(response.data);
          } catch (error) {
            console.error('Error fetching projects:', error);
          }
        });
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`, { state: { projectid: projectId } });
  };

  return (
    <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px' }}>
      <Paper elevation={3} style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ overflow: 'auto', flex: 1, minHeight: '51vh' }}>
          <List>
            {projects.map((project) => (
              <ListItemButton key={project.projectid} onClick={() => handleProjectClick(project.projectid)}>
                <ListItemText primary={project.projectname} secondary={`${project.address}, ${project.startdate}, ${project.enddate}`} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomerRelatedProject;