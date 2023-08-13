import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';


interface Data {
  address: string;
  email: string;
  phone: string;
  name: string;
  link: string;
}

function createData(
  name: string,
  address: string,
  phone: string,
  email: string,
  link: string,
): Data {
  return {
    name,
    address,
    phone,
    email,
    link,
  };
}



const rows = [
  createData('Jason Stathamd', '4765 Evergreen Terrace', '123-456-7890', 'jason@example.com', 'http'),
  createData('Ron Starkd', '34253 Dogwood Circle', '234-567-8901', 'ron@example.com', 'http'),
  createData('Jerry Seinfeldd', '2345 Magnolia Drive', '345-678-9012', 'jerry@example.com', 'http'),
  createData('Barry Allena', '3682 Hawthorn Road', '456-789-0123', 'barry@example.com', 'http'),
  createData('Garry Willsg', '1226 Ash Lane', '567-890-1234', 'garry@example.com', 'http'),
  createData('Daniel Radcliffeh', '4087 Elm Street', '678-901-2345', 'daniel@example.com', 'http'),
  createData('Benedict Cumberbatchk', '237 Oak Street', '789-012-3456', 'benedict@example.com', 'http'),
  createData('James McAvoyl', '375 Pine Avenue', '890-123-4567', 'james@example.com', 'http'),
  createData('Keanu Reevesg', '518 Cedar Drive', '901-234-5678', 'keanu@example.com', 'http'),
  createData('Liam Neesond', '392 Birch Road', '234-567-8901', 'liam@example.com', 'http'),
  createData('Jason Stathama', '4765 Evergreen Terrace', '123-456-7890', 'jason@example.com', 'http'),
  createData('Ron Starkc', '34253 Dogwood Circle', '234-567-8901', 'ron@example.com', 'http'),
  createData('Jerry Seinfeldb', '2345 Magnolia Drive', '345-678-9012', 'jerry@example.com', 'http'),
  createData('Barry Allenm', '3682 Hawthorn Road', '456-789-0123', 'barry@example.com', 'http'),
  createData('Garry Willsk', '1226 Ash Lane', '567-890-1234', 'garry@example.com', 'http'),
  createData('Daniel Radcliffel', '4087 Elm Street', '678-901-2345', 'daniel@example.com', 'http'),
  createData('Benedict Cumberbatch;', '237 Oak Street', '789-012-3456', 'benedict@example.com', 'http'),
  createData('James McAvoyo', '375 Pine Avenue', '890-123-4567', 'james@example.com', 'http'),
  createData('Keanu Reeves4', '518 Cedar Drive', '901-234-5678', 'keanu@example.com', 'http'),
  createData('Liam Neeson2', '392 Birch Road', '234-567-8901', 'liam@example.com', 'http'),
  createData('Jason Statham1', '4765 Evergreen Terrace', '123-456-7890', 'jason@example.com', 'http'),
  createData('Ron Stark5', '34253 Dogwood Circle', '234-567-8901', 'ron@example.com', 'http'),
  createData('Jerry Seinfeld6', '2345 Magnolia Drive', '345-678-9012', 'jerry@example.com', 'http'),
  createData('Barry Allen7', '3682 Hawthorn Road', '456-789-0123', 'barry@example.com', 'http'),
  createData('Garry Wills8', '1226 Ash Lane', '567-890-1234', 'garry@example.com', 'http'),
  createData('Daniel Radcliffe9', '4087 Elm Street', '678-901-2345', 'daniel@example.com', 'http'),
  createData('Benedict Cumberbatch0', '237 Oak Street', '789-012-3456', 'benedict@example.com', 'http'),
  createData('James McAvoy1', '375 Pine Avenue', '890-123-4567', 'james@example.com', 'http'),
  createData('Keanu Reevesl', '518 Cedar Drive', '901-234-5678', 'keanu@example.com', 'http'),
  createData('Liam Neesonl', '392 Birch Road', '234-567-8901', 'liam@example.com', 'http'),
  createData('Jason Stathaml', '4765 Evergreen Terrace', '123-456-7890', 'jason@example.com', 'http'),
  createData('Ron Starkj', '34253 Dogwood Circle', '234-567-8901', 'ron@example.com', 'http'),
  createData('Jerry Seinfeldk', '2345 Magnolia Drive', '345-678-9012', 'jerry@example.com', 'http'),
  createData('Barry Allenf', '3682 Hawthorn Road', '456-789-0123', 'barry@example.com', 'http'),
  createData('Garry Willss', '1226 Ash Lane', '567-890-1234', 'garry@example.com', 'http'),
  createData('Daniel Radcliffew', '4087 Elm Street', '678-901-2345', 'daniel@example.com', 'http'),
  createData('Benedict Cumberbatchj', '237 Oak Street', '789-012-3456', 'benedict@example.com', 'http'),
  createData('James McAvoya', '375 Pine Avenue', '890-123-4567', 'james@example.com', 'http'),
  createData('Keanu Reevesvb', '518 Cedar Drive', '901-234-5678', 'keanu@example.com', 'http'),
  createData('Liam Neesonsd', '392 Birch Road', '234-567-8901', 'liam@example.com', 'http'),
  createData('Jason Stathamdfg', '4765 Evergreen Terrace', '123-456-7890', 'jason@example.com', 'http'),
  createData('Ron Starkdfg', '34253 Dogwood Circle', '234-567-8901', 'ron@example.com', 'http'),
  createData('Jerry Seinfeldfgf', '2345 Magnolia Drive', '345-678-9012', 'jerry@example.com', 'http'),
  createData('Barry Allenfg', '3682 Hawthorn Road', '456-789-0123', 'barry@example.com', 'http'),
  createData('Garry Willsfg', '1226 Ash Lane', '567-890-1234', 'garry@example.com', 'http'),
  createData('Daniel Radcliffefg', '4087 Elm Street', '678-901-2345', 'daniel@example.com', 'http'),
  createData('Benedict Cumberbatchfg', '237 Oak Street', '789-012-3456', 'benedict@example.com', 'http'),
  createData('James McAvoyfg', '375 Pine Avenue', '890-123-4567', 'james@example.com', 'http'),
  createData('Keanu Reevesfgfg', '518 Cedar Drive', '901-234-5678', 'keanu@example.com', 'http'),
  createData('Liam Neesonfsfs', '392 Birch Road', '234-567-8901', 'liam@example.com', 'http'),
  createData('Person 91', '9191 Maple St', '191-191-1911', 'person91@example.com', 'http'),
  createData('Person 92', '9292 Oak St', '192-192-1922', 'person92@example.com', 'http'),
  createData('Person 93', '9393 Elm St', '193-193-1933', 'person93@example.com', 'http'),
  createData('Person 94', '9494 Cedar St', '194-194-1944', 'person94@example.com', 'http'),
  createData('Person 95', '9595 Birch St', '195-195-1955', 'person95@example.com', 'http'),
  createData('Person 96', '9696 Ash St', '196-196-1966', 'person96@example.com', 'http'),
  createData('Person 97', '9797 Pine St', '197-197-1977', 'person97@example.com', 'http'),
  createData('Person 98', '9898 Oak St', '198-198-1988', 'person98@example.com', 'http'),
  createData('Person 99', '9999 Elm St', '199-199-1999', 'person99@example.com', 'http'),
  createData('Person 100', '1000 Cedar St', '100-100-1000', 'person100@example.com', 'http'),
];


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Select All',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Phone',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'link',
    numeric: true,
    disablePadding: false,
    label: 'Link Button',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}


function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <TableHead>
      <TableRow sx={{ height: '30px' }}>
        <TableCell padding="checkbox" sx={{ height: '30px' }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all clients',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}


function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
<Toolbar
  sx={{
    minHeight: '50px !important', // Shrink the height by 50%
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
    ...(numSelected > 0 && {
      bgcolor: (theme) =>
        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
    }),
    // Add specific class targeting if needed
    '&.css-tcc2ha-MuiToolbar-root': {
      height: '50%', // Shrink the height by 50% for this specific class
    },
  }}
>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        </Typography>
      )}
      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('address');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >   
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.link}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense"
      />
              <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <TablePagination
          rowsPerPageOptions={[10, 15, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      </Paper>
    </Box>
  );
}
