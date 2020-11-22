import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

// import axios from 'axios'

const Table = (props) => {
  // console.log(props);
  const [table, setTable] = useState([]);

  useEffect(() => {
    console.log({props});
  }, []) // run ONLY IF airlines.length changes
  // useEffect(() => {
  //   axios.get('/api/v1/airlines.json')
  //     .then( resp => { // in a Class use this.setState()
  //       setAirlines(resp.data.data) // in a function we already set it in a variable
  //     } )
  //     .catch( resp => console.log(resp) )
  // }, [airlines.length]) // run ONLY IF airlines.length changes

  return (
    <div onClick={props.handleClick} className="single-table col-4">
      <h3>
        <Link to={"/tables/" + props.tableNumber}>Table {props.tableNumber}</Link>
      </h3>
      <p>Table DISHES here</p>

    </div>
  )

}

export default Table