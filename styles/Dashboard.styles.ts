import { styled } from '@mui/material/styles';

export const SideSearchContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row', // Align elements horizontally
  marginTop: '60px', // Add a top margin to align below the navbar
});

export const SidebarContainer = styled('div')<{
  isExpanded: boolean;
}>(({ isExpanded }) => ({
  width: isExpanded ? '250px' : '80px', // Set the width based on expansion
  transition: '0.3s', // Add a smooth transition
  flexShrink: 0, // Prevent the sidebar from shrinking
}));

export const SearchbarContainer = styled('div')({
  flex: 1, // Occupy the remaining width
  paddingLeft: '10px', // Add padding to separate from sidebar
});

export const DashboardContainer = styled('div')({
  flex: 1, // Occupy the remaining space
});

export const DashboardMain = styled('div')({
  alignItems: 'center', // Center items vertically
  display: 'flex', // Use flexbox layout
  flexDirection: 'column', // Align items in a column
  justifyContent: 'center', // Center items horizontally
  flex: 1, // Occupy the remaining space
});
