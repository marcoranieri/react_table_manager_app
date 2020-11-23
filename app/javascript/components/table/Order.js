import React,{ useState, useEffect, Fragment } from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'

// import axios from 'axios'


const Order = (props) => {
  // console.log("DISH PROPS  ",props)
  const [dish, setDish] = useState([]);

  useEffect(() => {
    setDish(props.dish)
  }, [])

  // console.log("DISH ",dish)


  return (
    <div className='order-container' style={{border: `4px solid ` + dish.color}}>
      {dish.name}
    </div>
  )
}

export default Order