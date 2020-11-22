import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Table from './Table'


const Tables = () => {

  const [tables, setTables] = useState([]);

  const fetchAllTables = () => {
    axios.get('/api/v1/tables.json')
      .then( resp => setTables(resp.data.data) )
      .catch( resp => console.log(resp) )
  }

  const findActiveTable = (tables, number) => tables.find(t => t.attributes.table_number === number && t.attributes.active === true )

  const setTable = () => {
    console.log(tables)
  }

  useEffect(() => {
    fetchAllTables()
  }, [tables.length])

  console.log(tables);
  console.log(findActiveTable(tables, 1));


  return (
    <div>
      <h1 className="text-center">TABLES</h1>
      <div className="row">
        { [1,2,3,4,5,6].map(i=> <Table setTable={setTable} tableNumber={i} key={`table-${i}`}/> ) }
      </div>
    </div>
  )

}

export default Tables