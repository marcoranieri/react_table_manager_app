import React,{ useState, useEffect, Fragment } from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'

import Dish from "./Dish";

import axios from 'axios'


const Dishes = (props) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get(`/api/v1/dishes.json`)
    .then( resp => {
      setDishes(
        resp.data.data.map((dish)=>{
          return {
            id:          `${dish.id}`,
            name:        `${dish.attributes.name}`,
            color:       `${dish.attributes.color}`,
            price_cents: `${dish.attributes.price_cents}`,
          }
        })
      )
    })
    .catch( resp => console.log(resp))
  }, [])



  return (
    <Fragment>
      {dishes.map(dish => <Dish dish={dish} key={`dish-${dish.id}`} />)}
    </Fragment>
  )
}

export default Dishes