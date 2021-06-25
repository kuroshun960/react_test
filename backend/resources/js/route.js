import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';

import Example from './pages/Example';
import Home from './pages/Home';

  function App() {
    return (
        <div className="aaab" >
            <Switch>
                //ここに、pathと対応するコンポーネントを書いていく
                <Route path='/example' exact component={Example} />
                <Route path='/' exact component={Home} />
                
            </Switch>
        </div>
    );
}







  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
