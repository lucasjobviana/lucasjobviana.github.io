import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './component/Header';
import App from './page/App';
import Projects from './page/Projects';
import Tools from './page/Tools';
import About from './page/About';
import './style/App.css';

function AppRouter() {

	return (
		<div className="App">
			<Header />

			<Route render={({ location }) => (
				<TransitionGroup>
					<CSSTransition
						key={location.key}
						timeout={400}
						classNames="fade"
					>
						<Switch>
							<Route exact path="/" component={App} />
							<Route exact path="/projects" component={Projects} />
							<Route exact path="/tools" component={Tools} />
							<Route exact path="/about" component={About} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)}
			/>

		</div>
	);
}

export default AppRouter; 
