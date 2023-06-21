import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import App from './page/App';



function AppRouter() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ App } />
      </Switch>    
    </div>
  );
}

export default AppRouter; 
