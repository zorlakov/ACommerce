import './App.css';
import Header from './components/header/header.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ProductsPage from './pages/productsPage/productsPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Switch>
        <Route name='test' path='/about' component={ProductsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
