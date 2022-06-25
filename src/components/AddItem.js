import { FormControl, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'

const AddItem = (props) => {

  return (
    <>
      <TextField
        name='title'
        value={props.input.title}
        onChange={props.inputHandler}
        label="Title" size='small' sx={{ m: 1 }}
      />
      <TextField
        name='dueDate'
        value={props.input.dueDate}
        onChange={props.inputHandler}
        type="date" size='small' sx={{ m: 1 }}
      />
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          name='status'
          value={props.input.status}
          onChange={props.inputHandler}
          label="Status" size='small' sx={{ width: '150px', m: 1 }}
        >
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Complete">Complete</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Priority</InputLabel>
        <Select
          name='priority'
          value={props.input.priority}
          onChange={props.inputHandler}
          label="Priority" size='small' sx={{ width: '150px', m: 1 }}
        >
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      {
        props.id ? <Button onClick={() => props.updateHandler(props.id)} variant='contained' color='success' sx={{ px: 5, m: 1 }}>UPDATE</Button>
          :
          <Button onClick={props.submitHandler} variant='contained' color='success' sx={{ px: 5, m: 1 }}>ADD</Button>
      }
    </>
  )
}

export default AddItem;