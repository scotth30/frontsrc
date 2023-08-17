import { styled } from '@mui/system';

export const SideSearchContainer = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    display: 'flex',
    flexDirection: 'row',
    transition: '0.3s',
    position: 'sticky',
  })
);

export const ButtonsContainer = styled('div')({
  flex: '0.2', // Buttons take 20% of the remaining space
  display: 'flex',
  flexDirection: 'row',
  width: '50px',
  gap: '10px',
  justifyContent: 'flex-end',
});

export const SidebarContainer = styled('div')<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    width: isExpanded ? '250px' : '60px',
    transition: '0.3s',
    flexShrink: 0,
  })
);

export const SearchbarContainer = styled('div')({
  position: 'sticky',
  
  flex: 1, // Searchbar takes 80% of the remaining space
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
    justifyContent: 'flex-end', // Align children to the bottom
    flex: 1,
    width: isExpanded ? 'calc(100% - 250px)' : 'calc(100% - 60px)',
    marginLeft: isExpanded ? '250px' : '60px',
    transition: '0.3s',
    position: 'relative',
    overflow: 'hidden',
  })
);
