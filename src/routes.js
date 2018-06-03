import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import About from './components/About';
import Sample from './components/Sample';
import Menu from './components/Menu';
import data from '../data/recipes.json';
import Navigation from './components/Navigation';

console.log(data);

const Routes = () => (
  <Router>
    <div>
    <Navigation />
      <Route exact path="/" render={() =>(
        <Menu recipes={data} />
      )}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
    </div>
  </Router>
);

export default Routes;
