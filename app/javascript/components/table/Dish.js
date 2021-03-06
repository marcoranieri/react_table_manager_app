import React,{ useState, useEffect, Fragment } from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'


const Dish = (props) => {
  const [dish, setDish] = useState([]);

  useEffect(() => {
    setDish(props.dish)
  }, [])


  return (
    <div
      className='dish-container'
      style={{border: `4px solid ` + dish.color}}
    >
      {props.dish.name}
    </div>
  )
}

export default Dish