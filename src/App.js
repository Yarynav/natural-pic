import './styles.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favoritos from './views/Favoritos';
import { useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';

export default function App() {
  const [fotos, setFotos] = useState([]);

  const getPhotos = async () => {
    const endpoint = '/fotos.json';
    const response = await fetch(endpoint);
    const json = await response.json();
    setFotos(json.photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ fotos, setFotos }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
