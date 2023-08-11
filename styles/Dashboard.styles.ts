import { styled } from '@mui/system';

export const SideSearchContainer = styled('div')<{
  isExpanded: boolean;
}>(({ isExpanded }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '60px',
  paddingLeft: isExpanded ? '260px' : '80px', // Adjust the padding based on sidebar width
  transition: '0.3s',
}));



export const ButtonsContainer = styled('div')({
  flex: '0.2', // Buttons take 20% of the remaining space
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  justifyContent: 'flex-end',
});

// Other styles...

export const SidebarContainer = styled('div')<{
  isExpanded: boolean;
}>(({ isExpanded }) => ({
  width: isExpanded ? '250px' : '80px',
  transition: '0.3s',
  flexShrink: 0,
}));

export const SearchbarContainer = styled('div')({
  position: 'fixed',
  flex: '0.8', // Searchbar takes 80% of the remaining space
});

export const DashboardContainer = styled('div')({
  flex: 1,
});

export const DashboardMain = styled('div')({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
});
