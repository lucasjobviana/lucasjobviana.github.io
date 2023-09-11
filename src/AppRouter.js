import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './component/Header';
import App from './page/App';
import Projects from './page/Projects';
// import Tools from './page/Tools';
// import About from './page/About';
import './style/App.css';

function AppRouter() {
	const { user: { buttonsNav } } = useSelector((store) => store);
	const pathofThisPage = useLocation().pathname;
	const history = useHistory();
	let index = '66';

	for (const [key, value] of Object.entries(buttonsNav)) {
		console.log(`${key}: ${value}`);
		if (buttonsNav[key]['to'] === pathofThisPage) {
			index = key;
		}
	}
	console.log('ja achei meu index = ', index)

	const handleClick = (page) => {
		console.log('meu index', index)
		let numberIndex = Number(index);
		if (page === 'prev') {
			numberIndex = numberIndex === 0 ? (buttonsNav.length) : numberIndex;
			history.push(buttonsNav[--numberIndex].to);
			return;
		}
		numberIndex = numberIndex === (buttonsNav.length) - 1 ? -1 : numberIndex;
		history.push(buttonsNav[++numberIndex].to)
	}


	return (
		<div className="App">
			<Header />
			<div className='app'>
				<button onClick={() => { handleClick('prev') }} className='btn-direction prev-page' />
				<button onClick={() => { handleClick('next') }} className='btn-direction nav next-page' />

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
								{/* <Route exact path="/tools" component={Tools} />
								<Route exact path="/about" component={About} /> */}
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
				/>
			</div>

		</div>
	);
}

export default AppRouter; 
