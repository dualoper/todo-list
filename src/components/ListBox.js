
import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ShowDate from './ShowDate';

const ListBox = (props) => {

  return (
    <>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>SL. NO.</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell>CREATED ON</TableCell>
            <TableCell>DUE DATE</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>PRIORITY</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.list.length>0 ? props.list.map((item, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell><ShowDate dt={item.createdOn} /></TableCell>
                <TableCell><ShowDate dt={item.dueDate} /></TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.priority}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => props.deleteHandler(item._id)} variant="contained" color='error'>DELETE</Button>
                  <Button
                    onClick={() => props.getItem(item._id)} variant="outlined">EDIT</Button>
                </TableCell>
              </TableRow>
            )) : <h1>Not Found!</h1>}
        </TableBody>
      </Table>
    </>
  )
}

export default ListBox;