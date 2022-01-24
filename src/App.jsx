import { Provider } from 'react-redux'

import generateStore from './redux/store';

import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Categories from './components/categories/Categories';


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
