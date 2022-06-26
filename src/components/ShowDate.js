
import React from 'react'

const ShowDate = (props) => {
  const dayCreate = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday'];
  const monthCreate = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const getdate = new Date(props.dt);

  const day = dayCreate[getdate.getDay()];
  const month = monthCreate[getdate.getMonth()];
  const date = getdate.getDate();
  const year = getdate.getFullYear();


  return (
    <>
      <small>{day}</small> <br />
      {`${month}, ${date}`} <br />
      <small>{year}</small>
    </>
  )
}

export default ShowDate;