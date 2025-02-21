import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Example icon

export default function CollapseButton({ onClick }) {
  return (
    <IconButton onClick={onClick} aria-label="Toggle sidebar">
      <MenuIcon /> {/* Replace with your desired icon */}
    </IconButton>
  );
}
