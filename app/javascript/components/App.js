import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Tables from './tables/Tables'
import Table from './table/Table'


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Tables}/>
      <Route exact path="/tables/:id" component={Table}/>
    </Switch>
  )
}

export default App