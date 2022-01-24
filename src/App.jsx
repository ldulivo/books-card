import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Categories from './components/categories/Categories';
import Book from './components/book/Book';

import './App.scss';

function App() {
  
  return (
    <BrowserRouter>
      <Header
        title="My título"
      />
      <Categories />
      
      <Routes>
        <Route path='/' exact element={<Cards />} />
        <Route path='/book' exact element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
