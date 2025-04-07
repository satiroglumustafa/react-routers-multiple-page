
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

import NewsDetail from './pages/NewsDetail';
import NewsCategory from './pages/NewsCategory';
import { useState } from 'react';
import NewsContext from './contexts/NewsContext';


function App() {

 

  const [selectedNews, setSelectedNews] = useState(null)

  return (
    <>
      <NewsContext.Provider value={{selectedNews,setSelectedNews}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />}></Route>
              <Route path='hakkimizda' element={<About />}></Route>
              <Route path='haberler' element={<NewsCategory />}></Route>
              <Route path='haberler/:category/:id' element={<NewsDetail />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </NewsContext.Provider>

    </>
  );
}

export default App;
