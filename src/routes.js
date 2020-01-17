import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Sunlight from './pages/Sunlight';
import Water from './pages/Water';
import Pets from './pages/Pets';
import Picks from './pages/Picks';
import Plant from './pages/Plant';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/sunlight" component={Sunlight} />
        <Route path="/water" component={Water} />
        <Route path="/pets" component={Pets} />
        <Route path="/picks" component={Picks} />
        <Route path="/plant" component={Plant} />
      </Switch>
    </BrowserRouter>
  );
}
