import { Provider } from 'react-redux'

import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Categories from './components/categories/Categories';

import generateStore from './redux/store';

import './App.scss';

function App() {

  const store = generateStore()
  return (
    <Provider store={store}>
      <Header
        title="My título"
      />
      <Categories />
      <Cards />
    </Provider>
  );
}

export default App;
