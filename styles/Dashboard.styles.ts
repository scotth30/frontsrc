import { styled } from '@mui/system';

export const SideSearchContainer = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '60px',
    marginLeft: isExpanded ? '260px' : '80px', // Adjust the padding based on sidebar width
    transition: '0.3s',
    position: 'sticky',
  })
);

export const ButtonsContainer = styled('div')({
  flex: '0.2', // Buttons take 20% of the remaining space
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  justifyContent: 'flex-end',
});

export const SidebarContainer = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    width: isExpanded ? '250px' : '80px',
    transition: '0.3s',
    flexShrink: 0,
  })
);

export const SearchbarContainer = styled('div')({
  position: 'sticky',
  
  flex: 10, // Searchbar takes 80% of the remaining space
});

export const DashboardContainer = styled('div')({
  position: 'sticky',

  flex: 1,
});

export const DashboardMain = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    width: isExpanded ? 'calc(100% - 260px)' : 'calc(100% - 80px)',
    marginLeft: isExpanded ? '260px' : '80px',
    paddingTop: '70px', // Padding based on search bar height
    marginTop: '60px',
    transition: '0.3s',
    position: 'relative',
    overflow: 'hidden',
  })
);
