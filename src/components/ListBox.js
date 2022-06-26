
import React from 'react';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import ShowDate from './ShowDate';

const ListBox = (props) => {

  return (
    <Table stickyHeader sx={{ tableLayout: 'fixed' }} size="small">
      <TableHead >
        <TableRow >
          <TableCell>SL. NO.</TableCell>
          <TableCell>TITLE</TableCell>
          <TableCell>CREATED ON</TableCell>
          <TableCell>DUE DATE</TableCell>
          <TableCell>STATUS</TableCell>
          <TableCell>PRIORITY</TableCell>
          <TableCell>ACTION</TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ color: 'white' }}>
        {props.list.length > 0 ? props.list.map((item, index) => (
          <TableRow sx={{
            '&:hover': {
              boxShadow: '0 0 20px green',
              backgroundColor: '#343333f0'
            }
          }}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell><ShowDate dt={item.createdOn} /></TableCell>
            <TableCell><ShowDate dt={item.dueDate} /></TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.priority}</TableCell>
            <TableCell>
              <IconButton>
                <Create onClick={() => props.getItem(item._id)} color='primary' />
              </IconButton>
              <IconButton>
                <DeleteIcon onClick={() => props.deleteHandler(item._id)} color='error' />
              </IconButton>
            </TableCell>
          </TableRow>
        )) : <h1>Not Found!</h1>}
      </TableBody>
    </Table>
  )
}

export default ListBox;