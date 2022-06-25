
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
      <h3>{day}</h3>
      <h2>{`${month}, ${date}`}</h2>
      <h4>{year}</h4>
    </>
  )
}

export default ShowDate;