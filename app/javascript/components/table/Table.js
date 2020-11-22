import React,{ useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import axios from 'axios'

import Dish from './Dish'


const Table = (props) => {
  const [table, setTable]   = useState([]);
  const [dishes, setDishes] = useState([]);

  // console.log(props);

  // function filterByValue(array, string) {
  //   return array.filter(o =>
  //       Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
  // }

  // function filterByValue(array, string) {     return array.filter(o => {     	return Object.keys(o).some(k => {       	if(typeof o[k] === 'string') return o[k].toLowerCase().includes(string.toLowerCase());       });      }); }

  // console.log("dish ",filterByValue(resp.data.included, 'dish')); // [{name: 'Lea', country: 'Italy'}]
  // console.log("order ", filterByValue(resp.data.included, 'order'));

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/v1/tables/${id}.json`)
    .then( resp => {
      setDishes(
        resp.data.included.map((dish)=>{
          return {
            id:          `${dish.id}`,
            name:        `${dish.attributes.name}`,
            color:       `${dish.attributes.color}`,
            price_cents: `${dish.attributes.price_cents}`,
            order_id:    `${dish.relationships.orders.data[0].id}`
          }
        })
      )
    })
    .catch( resp => console.log(resp))
  }, [])


  return (
    <Fragment>
      <h1>Table {props.tableNumber}</h1>

      <div className="table-show-container">
        <div className="dishes-wrapper">
          { dishes.map(dish => <Dish dish={dish} key={`dish-${dish.id}`} /> )}
        </div>
        <div>[ORDERS HERE]</div>
      </div>
    </Fragment>
  )
}

export default Table