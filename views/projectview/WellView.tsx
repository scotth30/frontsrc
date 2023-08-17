import * as React from 'react';
import { Paper, Typography, Box, ListItemButton, Avatar } from '@mui/material';
import { useState, useRef } from 'react';

interface Well {
  depth?: number;
  pipediameter?: number;
  pumpmodel?: string;
  geox?: number;
  geoy?: number;
  image?: string;
}

const wellData: Well = {
  depth: 120,
  pipediameter: 4,
  pumpmodel: 'Model-A',
  geox: 42,
  geoy: 55,
  image: '' // Here, you can set the image URL if available
};

const WellView: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    setExpandedImage(wellData.image || 'path/to/no-image.png');
  };

  const handleAddPicture = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload logic here, such as sending it to the backend
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        wellData.image = reader.result as string;
      };
    }
  };

  return (
    <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
      <Box sx={{ padding: 2, flexGrow: 1 }}>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>{`Depth: ${wellData.depth ?? 'Unknown'}`}</Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>{`Pipe Diameter: ${wellData.pipediameter ?? 'Unknown'}`}</Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>{`Pump Model: ${wellData.pumpmodel ?? 'Unknown'}`}</Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>{`Geo X: ${wellData.geox ?? 'Unknown'}`}</Typography>
        <Typography variant="body1">{`Geo Y: ${wellData.geoy ?? 'Unknown'}`}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        {wellData.image ? (
          <Avatar src={wellData.image} alt="Well Image" onClick={handleImageClick} sx={{ width: 100, height: 100, cursor: 'pointer' }} />
        ) : (
          <>
            <Avatar src="path/to/no-image.png" alt="No Image Available" sx={{ width: 100, height: 100 }} />
            <ListItemButton onClick={handleAddPicture} sx={{ marginTop: 1 }}>Add Picture</ListItemButton>
          </>
        )}
      </Box>
      {expandedImage && (
        <Box component="img" src={expandedImage} onClick={() => setExpandedImage(null)} sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }} />
      )}
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
    </Paper>
  );
};

export default WellView;
