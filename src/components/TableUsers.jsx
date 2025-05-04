import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { NavLink } from "react-router-dom";

const TableUsers = React.memo(({ users, onClickUser }) => {
  const handleClick = (id) => {
    onClickUser(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              hover
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <NavLink 
                  to={`/posts/${user.id}`} 
                  onClick={() => handleClick(user.id)}
                  style={{ 
                    textDecoration: 'none', 
                    color: '#1976d2', 
                    cursor: 'pointer' 
                  }}
                >
                  {user.name}
                </NavLink>
              </TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default TableUsers;