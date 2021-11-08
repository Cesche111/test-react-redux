import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {NavLink} from "react-router-dom";


const TableUsers = ({users, onClickUser}) => {

    const clickHandler = (name, id, e) => {
        e.preventDefault();
        onClickUser(id);
    }

    const createData = (name, email, phone, id) => {
        return {name, email, phone, id};
    }

    const rows = users.map((user) => {
        return createData(user.name, user.email, user.phone, user.id)
    });


    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow style={{backgroundColor: 'grey'}}>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({name, email, phone, id}) => (
                        <TableRow
                            key={name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row" onClick={(e) => clickHandler(name, id, e)}>
                                <NavLink style={{textDecoration: 'none'}} to={`/posts/${id}`}>{name}</NavLink>
                            </TableCell>
                            <TableCell align="right">{email}</TableCell>
                            <TableCell align="right">{phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default React.memo(TableUsers)