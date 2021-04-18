import Jobs from './Jobs';
import About from './About';
import Portfolio from './Portfolio';
import Navigation from './Navigation';
import Info from './Info';

import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Info />
			<Switch>
				<Route path='/jobs' component={Jobs} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/' component={About} />
			</Switch>
		</div>
	);
}

export default App;
