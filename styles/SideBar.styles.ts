import { styled } from '@mui/system';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconButton, ButtonBase } from '@mui/material';

interface SidebarProps {
  isExpanded: boolean;
}

export const Sidebar = styled('div')<SidebarProps>`
  width: ${(props) => (props.isExpanded ? '250px' : '60px')};
  height: calc(100% - 61px);
  position: fixed;
  top: 63px;
  left: 0;
  background: #0d6efd;
  overflow-x: hidden;
  transition: 0.3s;
  padding: 0;
`;

export const SidebarContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  color: white;
`;

export const ToggleButton = styled(IconButton)`
  color: white;
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const SidebarList = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledButtonBase = styled(ButtonBase)`
  width: 100%;
  color: white;
  text-align: left;
  text-decoration: none;
  font-size: 18px;
  transition: 0.3s;
`;

export const WhiteListItemIcon = styled(ListItemIcon)`
  color: white !important;
`;

export const IconStyle = styled('div')`
  color: white;
  display: inline-block;

  svg {
    fill: white;
  }
`;
