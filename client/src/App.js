import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Base from './components/Base/Base';
import Toppings from './components/Toppings/Toppings';
import Order from './components/Order/Order';
import Visualization from './components/VisualizeOKR/VisualizeOKR';
import Progress from './components/Progress/Progress';

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/visualize">
          <Visualization />
        </Route>
        <Route path="/progress">
          <Progress />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;