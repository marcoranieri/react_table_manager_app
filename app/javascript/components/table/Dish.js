import React,{ useState, useEffect, Fragment } from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'

import axios from 'axios'


const Dish = (props) => {
  console.log("DISH PROPS  ",props)
  const [dish, setDish] = useState([]);

  useEffect(() => {
    setDish(props.dish)
  }, [])

  console.log("DISH ",dish)


  return (
    <div className='dish-container' style={{border: `2px solid ` + dish.color}}>
      <p>{dish.name}</p>
    </div>
  )
}

export default Dish