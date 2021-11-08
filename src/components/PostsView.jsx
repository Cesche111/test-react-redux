import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const PostsView = ({posts}) => {

    const createData = (id, title, body) => {
        return {id, title, body};
    }

    const rows = posts.map((post) => {
        return createData(post.id, post.title, post.body)
    });


    return (

        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow style={{backgroundColor: 'grey'}}>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Body</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({id, title, body}) => (
                        <TableRow
                            key={id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {id}
                            </TableCell>
                            <TableCell align="left">{title}</TableCell>
                            <TableCell align="left">{body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default React.memo(PostsView)

