import { FormControl, InputLabel, MenuItem, Select, TextField, Box, IconButton } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import CheckCircle from '@mui/icons-material/CheckCircle';
import React from 'react'

const AddItem = (props) => {

  return (

    <Box sx={{
      width: '55%', padding: 'auto', borderRadius: '16px', margin: 'auto', border: '1px solid', '&:hover': {
        boxShadow: '0 0 20px green'
      }
    }}>
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
        props.id ? <IconButton>
          <CheckCircle onClick={() => props.updateHandler(props.id)} color='success' sx={{ fontSize: '45px' }} />
        </IconButton>
          :
          <IconButton>
            <AddCircle onClick={props.submitHandler} color='success' sx={{ fontSize: '45px' }} />
          </IconButton>
      }
    </Box>

  )
}

export default AddItem;