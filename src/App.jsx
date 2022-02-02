import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Components */
import Header from './components/header/Header';
import Categories from './components/categories/Categories';

/* Pages */
import Main from './pages/main/Main';
import Book from './pages/book/Book';

import './App.scss';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <Header
        title="Books Card"
      />
      <Categories />
      
      <Routes>
        <Route path='/' exact element={<Main />} >
          <Route path=':category' element={<Main />} />
        </Route>
        <Route path='/book' exact element={<Book />} >
          <Route path=':id' element={<Book />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
