import Jobs from './components/Jobs';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';

import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Switch>
				<Route path='/jobs' component={Jobs} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/' component={About} />
			</Switch>
		</div>
	);
}

export default App;
