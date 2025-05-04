import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PostsView = ({ posts }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow style={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>ID</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(post => (
            <TableRow
              key={post.id}
              hover
              sx={{ '&:last-child td': { border: 0 } }}
            >
              <TableCell>{post.id}</TableCell>
              <TableCell align="left">{post.title}</TableCell>
              <TableCell align="left">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(PostsView);