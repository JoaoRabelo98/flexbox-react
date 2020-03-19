import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../src/pages/Main/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
