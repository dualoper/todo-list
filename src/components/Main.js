import React, { useEffect, useState } from 'react'
import AddItem from './AddItem';
import ListBox from './ListBox';
import { Box, TextField } from '@mui/material';

const Main = () => {
  const [list, setList] = useState([]);
  const [id, setId] = useState();
  const [input, setInput] = useState({
    title: '',
    dueDate: '',
    status: '',
    priority: ''
  });

  //list
  const getData = async () => {
    let result = await fetch('http://localhost:8000/read');
    result = await result.json();
    setList(result.reverse());
  }

  //input data
  const inputHandler = e => {
    setInput((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  //add item
  const submitHandler = async () => {
    await fetch('http://localhost:8000/create', {
      method: 'post',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    setInput({
      title: '',
      dueDate: '',
      status: '',
      priority: ''
    });
    getData();
  }


  //delete
  const deleteHandler = async (id) => {
    await fetch(`http://localhost:8000/delete/${id}`, {
      method: 'Delete'
    });
    getData();
  }

  //1 item update
  const getItem = async (id) => {
    let result = await fetch(`http://localhost:8000/read/${id}`);
    result = await result.json();
    setInput(result);
    setId(id);
  }

  const updateHandler = async (id) => {
    await fetch(`http://localhost:8000/update/${id}`, {
      method: 'Put',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    setId();
    setInput({
      title: '',
      dueDate: '',
      status: '',
      priority: ''
    });

    getData();
  }


  const searchHandler = async (key) => {
    if (key) {
      let result = await fetch(`http://localhost:8000/search/${key}`);
      result = await result.json();
      if (result) {

        setList(result.reverse());
      }
    } else {
      getData();
    };
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <>
      <AddItem input={input} inputHandler={inputHandler} submitHandler={submitHandler} id={id} updateHandler={updateHandler} />

      <Box sx={{ width: '75%', borderRadius: '16px', margin: '5% auto', border: '1px solid', boxShadow: '0 0 10px #ff0000' }}>
        <TextField type="search" onChange={(e) => searchHandler(e.target.value)} sx={{m:2, ml:5, width: '300px'}} size='small'/>
        
        <ListBox list={list} deleteHandler={deleteHandler} getItem={getItem} />
      </Box>
    </>
  )
}

export default Main;